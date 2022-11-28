import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PathQueryOptionsFilterMatchEnum {
    Unknown = "UNKNOWN",
    Exact = "EXACT",
    Partial = "PARTIAL",
    BeginsWith = "BEGINS_WITH",
    WildcardExpression = "WILDCARD_EXPRESSION"
}


// PathQueryOptionsFilter
/** 
 * Dimension filter on path events.
**/
export class PathQueryOptionsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: PathQueryOptionsFilterMatchEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
