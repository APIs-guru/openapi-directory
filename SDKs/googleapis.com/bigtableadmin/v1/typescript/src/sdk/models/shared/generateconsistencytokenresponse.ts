import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateConsistencyTokenResponse
/** 
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken
**/
export class GenerateConsistencyTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consistencyToken" })
  consistencyToken?: string;
}
