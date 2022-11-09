import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventFilter } from "./eventfilter";

export enum PathFilterPathMatchPositionEnum {
    PathMatchPositionUnspecified = "PATH_MATCH_POSITION_UNSPECIFIED"
,    Any = "ANY"
,    First = "FIRST"
,    Last = "LAST"
}


// PathFilter
/** 
 * Represents a DfaReporting path filter.
**/
export class PathFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pathMatchPosition" })
  pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
