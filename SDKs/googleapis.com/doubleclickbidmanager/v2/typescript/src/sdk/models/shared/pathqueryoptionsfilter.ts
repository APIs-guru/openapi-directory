import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PathQueryOptionsFilterMatchEnum {
    Unknown = "UNKNOWN"
,    Exact = "EXACT"
,    Partial = "PARTIAL"
,    BeginsWith = "BEGINS_WITH"
,    WildcardExpression = "WILDCARD_EXPRESSION"
}


// PathQueryOptionsFilter
/** 
 * Dimension filter on path events.
**/
export class PathQueryOptionsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=match" })
  match?: PathQueryOptionsFilterMatchEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
