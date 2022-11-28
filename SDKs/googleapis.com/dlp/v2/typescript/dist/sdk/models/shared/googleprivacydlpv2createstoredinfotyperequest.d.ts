import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
/**
 * Request message for CreateStoredInfoType.
**/
export declare class GooglePrivacyDlpV2CreateStoredInfoTypeRequest extends SpeakeasyBase {
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    locationId?: string;
    storedInfoTypeId?: string;
}
