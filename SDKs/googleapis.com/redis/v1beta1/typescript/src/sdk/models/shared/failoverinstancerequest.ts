import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FailoverInstanceRequestDataProtectionModeEnum {
    DataProtectionModeUnspecified = "DATA_PROTECTION_MODE_UNSPECIFIED",
    LimitedDataLoss = "LIMITED_DATA_LOSS",
    ForceDataLoss = "FORCE_DATA_LOSS"
}


// FailoverInstanceRequest
/** 
 * Request for Failover.
**/
export class FailoverInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataProtectionMode" })
  dataProtectionMode?: FailoverInstanceRequestDataProtectionModeEnum;
}
