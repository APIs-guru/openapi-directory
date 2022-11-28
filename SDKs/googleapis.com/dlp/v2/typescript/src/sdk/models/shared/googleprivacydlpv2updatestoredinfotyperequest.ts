import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";



// GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
/** 
 * Request message for UpdateStoredInfoType.
**/
export class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
