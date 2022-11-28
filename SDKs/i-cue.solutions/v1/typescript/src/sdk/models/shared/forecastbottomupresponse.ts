import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";



export class ForecastBottomUpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forecastData", elemType: PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;
}
