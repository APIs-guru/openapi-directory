import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudConnectorsV1Secret
/** 
 * Secret provides a reference to entries in Secret Manager.
**/
export class GoogleCloudConnectorsV1Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=secretVersion" })
  secretVersion?: string;
}
