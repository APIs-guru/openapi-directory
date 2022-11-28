import { SpeakeasyBase } from "../../../internal/utils";
import { QueryMetadata } from "./querymetadata";
import { Parameters } from "./parameters";
import { QuerySchedule } from "./queryschedule";
/**
 * Represents a query.
**/
export declare class QueryInput extends SpeakeasyBase {
    metadata?: QueryMetadata;
    params?: Parameters;
    schedule?: QuerySchedule;
}
/**
 * Represents a query.
**/
export declare class Query extends SpeakeasyBase {
    metadata?: QueryMetadata;
    params?: Parameters;
    queryId?: string;
    schedule?: QuerySchedule;
}
