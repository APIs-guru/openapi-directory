import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DrivingDirectionMetricsRequestNumDaysEnum {
    Seven = "SEVEN"
,    Thirty = "THIRTY"
,    Ninety = "NINETY"
}


// DrivingDirectionMetricsRequest
/** 
 * A request for driving direction insights.
**/
export class DrivingDirectionMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=numDays" })
  numDays?: DrivingDirectionMetricsRequestNumDaysEnum;
}
