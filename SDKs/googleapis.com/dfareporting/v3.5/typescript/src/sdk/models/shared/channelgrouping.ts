import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelGroupingRule } from "./channelgroupingrule";



// ChannelGrouping
/** 
 * Represents a DfaReporting channel grouping.
**/
export class ChannelGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fallbackName" })
  fallbackName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: ChannelGroupingRule })
  rules?: ChannelGroupingRule[];
}
