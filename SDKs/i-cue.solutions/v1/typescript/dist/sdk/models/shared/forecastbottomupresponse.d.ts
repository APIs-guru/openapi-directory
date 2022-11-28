import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";
export declare class ForecastBottomUpResponse extends SpeakeasyBase {
    forecastData?: PlanningLevelForecastResultData[];
    hyperparameters?: ForecastHyperparameterResponse;
}
