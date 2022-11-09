import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";


// GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
/** 
 * Request message for UpdateStoredInfoType.
**/
export class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
