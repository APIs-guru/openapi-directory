import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2StoredInfoTypeStats } from "./googleprivacydlpv2storedinfotypestats";
export declare enum GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum {
    StoredInfoTypeStateUnspecified = "STORED_INFO_TYPE_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Ready = "READY",
    Failed = "FAILED",
    Invalid = "INVALID"
}
/**
 * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
**/
export declare class GooglePrivacyDlpV2StoredInfoTypeVersion extends SpeakeasyBase {
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    createTime?: string;
    errors?: GooglePrivacyDlpV2Error[];
    state?: GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum;
    stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
}
