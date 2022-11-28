import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";


export enum PathFilterPathMatchPositionEnum {
    PathMatchPositionUnspecified = "PATH_MATCH_POSITION_UNSPECIFIED",
    Any = "ANY",
    First = "FIRST",
    Last = "LAST"
}


// PathFilter
/** 
 * Represents a DfaReporting path filter.
**/
export class PathFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pathMatchPosition" })
  pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
