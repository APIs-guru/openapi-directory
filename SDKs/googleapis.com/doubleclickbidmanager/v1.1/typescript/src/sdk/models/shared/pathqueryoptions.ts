import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";


// PathQueryOptions
/** 
 * Path Query Options for Report Options.
**/
export class PathQueryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelGrouping" })
  channelGrouping?: ChannelGrouping;

  @Metadata({ data: "json, name=pathFilters", elemType: shared.PathFilter })
  pathFilters?: PathFilter[];
}
