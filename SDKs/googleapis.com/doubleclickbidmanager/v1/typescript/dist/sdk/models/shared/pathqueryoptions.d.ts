import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";
/**
 * Path Query Options for Report Options.
**/
export declare class PathQueryOptions extends SpeakeasyBase {
    channelGrouping?: ChannelGrouping;
    pathFilters?: PathFilter[];
}
