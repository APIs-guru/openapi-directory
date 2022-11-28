import { SpeakeasyBase } from "../../../internal/utils";
import { RewindHyperparameterResponse } from "./rewindhyperparameterresponse";
import { RewindTimeSeriesResponse } from "./rewindtimeseriesresponse";
export declare class RewindResponse extends SpeakeasyBase {
    hyperparameters?: RewindHyperparameterResponse;
    timeSeries?: RewindTimeSeriesResponse[];
    totalCost?: number;
}
