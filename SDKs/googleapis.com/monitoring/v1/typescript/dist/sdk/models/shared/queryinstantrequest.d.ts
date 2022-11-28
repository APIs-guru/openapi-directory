import { SpeakeasyBase } from "../../../internal/utils";
/**
 * QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
**/
export declare class QueryInstantRequest extends SpeakeasyBase {
    query?: string;
    time?: string;
    timeout?: string;
}
