import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
/**
 * Request message for UpdateStoredInfoType.
**/
export declare class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest extends SpeakeasyBase {
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    updateMask?: string;
}
