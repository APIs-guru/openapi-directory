import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DrivingDirectionMetricsRequestNumDaysEnum {
    Seven = "SEVEN",
    Thirty = "THIRTY",
    Ninety = "NINETY"
}


// DrivingDirectionMetricsRequest
/** 
 * A request for driving direction insights.
**/
export class DrivingDirectionMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=numDays" })
  numDays?: DrivingDirectionMetricsRequestNumDaysEnum;
}
