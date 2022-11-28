import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// ChannelGrouping
/** 
 * A channel grouping defines a set of rules that can be used to categorize events in a path report.
**/
export class ChannelGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fallbackName" })
  fallbackName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];
}
