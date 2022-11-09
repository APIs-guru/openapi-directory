import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelForecastResultData } from "./planninglevelforecastresultdata";
import { ForecastHyperparameterResponse } from "./forecasthyperparameterresponse";


export class ForecastBottomUpResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=forecastData", elemType: shared.PlanningLevelForecastResultData })
  forecastData?: PlanningLevelForecastResultData[];

  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: ForecastHyperparameterResponse;
}
