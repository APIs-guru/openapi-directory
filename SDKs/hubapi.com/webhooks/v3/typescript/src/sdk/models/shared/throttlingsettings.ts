import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ThrottlingSettingsPeriodEnum {
    Secondly = "SECONDLY",
    RollingMinute = "ROLLING_MINUTE"
}


// ThrottlingSettings
/** 
 * Configuration details for webhook throttling.
**/
export class ThrottlingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: ThrottlingSettingsPeriodEnum;
}
