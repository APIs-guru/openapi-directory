import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QuotaPropertiesQuotaModeEnum {
    Acquire = "ACQUIRE"
,    AcquireBestEffort = "ACQUIRE_BEST_EFFORT"
,    Check = "CHECK"
,    Release = "RELEASE"
}


// QuotaProperties
/** 
 * Represents the properties needed for quota operations.
**/
export class QuotaProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=quotaMode" })
  quotaMode?: QuotaPropertiesQuotaModeEnum;
}
