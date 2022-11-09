import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelGroupingRule } from "./channelgroupingrule";


// ChannelGrouping
/** 
 * Represents a DfaReporting channel grouping.
**/
export class ChannelGrouping extends SpeakeasyBase {
  @Metadata({ data: "json, name=fallbackName" })
  fallbackName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.ChannelGroupingRule })
  rules?: ChannelGroupingRule[];
}
