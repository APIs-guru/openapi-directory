import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudConnectorsV1Secret
/** 
 * Secret provides a reference to entries in Secret Manager.
**/
export class GoogleCloudConnectorsV1Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secretVersion" })
  secretVersion?: string;
}
