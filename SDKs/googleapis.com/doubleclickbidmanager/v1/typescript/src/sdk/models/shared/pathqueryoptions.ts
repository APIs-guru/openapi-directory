import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";



// PathQueryOptions
/** 
 * Path Query Options for Report Options.
**/
export class PathQueryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelGrouping" })
  channelGrouping?: ChannelGrouping;

  @SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: PathFilter })
  pathFilters?: PathFilter[];
}
