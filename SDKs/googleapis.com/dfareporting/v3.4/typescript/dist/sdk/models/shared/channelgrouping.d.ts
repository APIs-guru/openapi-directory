import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelGroupingRule } from "./channelgroupingrule";
/**
 * Represents a DfaReporting channel grouping.
**/
export declare class ChannelGrouping extends SpeakeasyBase {
    fallbackName?: string;
    kind?: string;
    name?: string;
    rules?: ChannelGroupingRule[];
}
