import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RewindHyperparameterResponse } from "./rewindhyperparameterresponse";
import { RewindTimeSeriesResponse } from "./rewindtimeseriesresponse";



export class RewindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: RewindHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=timeSeries", elemType: RewindTimeSeriesResponse })
  timeSeries?: RewindTimeSeriesResponse[];

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost?: number;
}
