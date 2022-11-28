import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeRuntimeRequest
/** 
 * Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = "TRUSTED_TESTER,SPECIAL_TESTER";
**/
export class UpgradeRuntimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
