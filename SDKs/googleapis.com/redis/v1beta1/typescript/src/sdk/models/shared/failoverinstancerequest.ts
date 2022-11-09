import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FailoverInstanceRequestDataProtectionModeEnum {
    DataProtectionModeUnspecified = "DATA_PROTECTION_MODE_UNSPECIFIED"
,    LimitedDataLoss = "LIMITED_DATA_LOSS"
,    ForceDataLoss = "FORCE_DATA_LOSS"
}


// FailoverInstanceRequest
/** 
 * Request for Failover.
**/
export class FailoverInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataProtectionMode" })
  dataProtectionMode?: FailoverInstanceRequestDataProtectionModeEnum;
}
