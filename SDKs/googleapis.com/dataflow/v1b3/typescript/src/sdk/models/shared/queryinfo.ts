import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryInfoQueryPropertyEnum {
    QueryPropertyUnspecified = "QUERY_PROPERTY_UNSPECIFIED",
    HasUnboundedSource = "HAS_UNBOUNDED_SOURCE"
}


// QueryInfo
/** 
 * Information about a validated query.
**/
export class QueryInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryProperty" })
  queryProperty?: QueryInfoQueryPropertyEnum[];
}
