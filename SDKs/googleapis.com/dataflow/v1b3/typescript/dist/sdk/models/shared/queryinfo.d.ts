import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryInfoQueryPropertyEnum {
    QueryPropertyUnspecified = "QUERY_PROPERTY_UNSPECIFIED",
    HasUnboundedSource = "HAS_UNBOUNDED_SOURCE"
}
/**
 * Information about a validated query.
**/
export declare class QueryInfo extends SpeakeasyBase {
    queryProperty?: QueryInfoQueryPropertyEnum[];
}
