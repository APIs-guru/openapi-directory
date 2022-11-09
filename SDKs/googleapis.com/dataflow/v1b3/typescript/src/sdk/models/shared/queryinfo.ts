import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryInfoQueryPropertyEnum {
    QueryPropertyUnspecified = "QUERY_PROPERTY_UNSPECIFIED"
,    HasUnboundedSource = "HAS_UNBOUNDED_SOURCE"
}


// QueryInfo
/** 
 * Information about a validated query.
**/
export class QueryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryProperty" })
  queryProperty?: QueryInfoQueryPropertyEnum[];
}
