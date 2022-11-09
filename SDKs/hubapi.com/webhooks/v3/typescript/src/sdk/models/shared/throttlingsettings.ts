import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ThrottlingSettingsPeriodEnum {
    Secondly = "SECONDLY"
,    RollingMinute = "ROLLING_MINUTE"
}


// ThrottlingSettings
/** 
 * Configuration details for webhook throttling.
**/
export class ThrottlingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests: number;

  @Metadata({ data: "json, name=period" })
  period: ThrottlingSettingsPeriodEnum;
}
