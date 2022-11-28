import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DrivingDirectionMetricsRequestNumDaysEnum {
    Seven = "SEVEN",
    Thirty = "THIRTY",
    Ninety = "NINETY"
}
/**
 * A request for driving direction insights.
**/
export declare class DrivingDirectionMetricsRequest extends SpeakeasyBase {
    languageCode?: string;
    numDays?: DrivingDirectionMetricsRequestNumDaysEnum;
}
