import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";


export enum PathFilterPathMatchPositionEnum {
    Any = "ANY",
    First = "FIRST",
    Last = "LAST"
}


// PathFilter
/** 
 * Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.
**/
export class PathFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];

  @SpeakeasyMetadata({ data: "json, name=pathMatchPosition" })
  pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
