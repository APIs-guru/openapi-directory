import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AzureCredentials
/** 
 * Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
**/
export class AzureCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sasToken" })
  sasToken?: string;
}
