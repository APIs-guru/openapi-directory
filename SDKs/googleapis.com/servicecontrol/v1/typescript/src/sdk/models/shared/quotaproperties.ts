import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QuotaPropertiesQuotaModeEnum {
    Acquire = "ACQUIRE",
    AcquireBestEffort = "ACQUIRE_BEST_EFFORT",
    Check = "CHECK",
    Release = "RELEASE"
}


// QuotaProperties
/** 
 * Represents the properties needed for quota operations.
**/
export class QuotaProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quotaMode" })
  quotaMode?: QuotaPropertiesQuotaModeEnum;
}
