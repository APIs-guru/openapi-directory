import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";
/**
 * A channel grouping defines a set of rules that can be used to categorize events in a path report.
**/
export declare class ChannelGrouping extends SpeakeasyBase {
    fallbackName?: string;
    name?: string;
    rules?: Rule[];
}
