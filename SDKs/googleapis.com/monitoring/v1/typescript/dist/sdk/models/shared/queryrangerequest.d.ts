import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.
**/
export declare class QueryRangeRequest extends SpeakeasyBase {
    end?: string;
    query?: string;
    start?: string;
    step?: string;
    timeout?: string;
}
