import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
export declare enum PathFilterPathMatchPositionEnum {
    PathMatchPositionUnspecified = "PATH_MATCH_POSITION_UNSPECIFIED",
    Any = "ANY",
    First = "FIRST",
    Last = "LAST"
}
/**
 * Represents a DfaReporting path filter.
**/
export declare class PathFilter extends SpeakeasyBase {
    eventFilters?: EventFilter[];
    kind?: string;
    pathMatchPosition?: PathFilterPathMatchPositionEnum;
}
