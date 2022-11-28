import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
/**
 * Summary of the result of a failed request to write data to a time series.
**/
export declare class CreateTimeSeriesSummary extends SpeakeasyBase {
    errors?: Error[];
    successPointCount?: number;
    totalPointCount?: number;
}
