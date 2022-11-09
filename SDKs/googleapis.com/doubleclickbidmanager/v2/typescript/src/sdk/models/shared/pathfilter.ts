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
 * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
**/
export class PathFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];

  @Metadata({ data: "json, name=pathMatchPosition" })
  pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
