import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FailoverInstanceRequestDataProtectionModeEnum {
    DataProtectionModeUnspecified = "DATA_PROTECTION_MODE_UNSPECIFIED",
    LimitedDataLoss = "LIMITED_DATA_LOSS",
    ForceDataLoss = "FORCE_DATA_LOSS"
}
/**
 * Request for Failover.
**/
export declare class FailoverInstanceRequest extends SpeakeasyBase {
    dataProtectionMode?: FailoverInstanceRequestDataProtectionModeEnum;
}
