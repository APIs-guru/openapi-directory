import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RewindHyperparameterResponse } from "./rewindhyperparameterresponse";
import { RewindTimeSeriesResponse } from "./rewindtimeseriesresponse";


export class RewindResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: RewindHyperparameterResponse;

  @Metadata({ data: "json, name=timeSeries", elemType: shared.RewindTimeSeriesResponse })
  timeSeries?: RewindTimeSeriesResponse[];

  @Metadata({ data: "json, name=totalCost" })
  totalCost?: number;
}
