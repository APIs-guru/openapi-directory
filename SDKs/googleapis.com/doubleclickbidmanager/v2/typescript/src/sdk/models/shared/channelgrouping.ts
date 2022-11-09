import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// ChannelGrouping
/** 
 * A channel grouping defines a set of rules that can be used to categorize events in a path report.
**/
export class ChannelGrouping extends SpeakeasyBase {
  @Metadata({ data: "json, name=fallbackName" })
  fallbackName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules?: Rule[];
}
