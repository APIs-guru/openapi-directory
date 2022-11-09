import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DerivedSource } from "./derivedsource";
import { DerivedSource } from "./derivedsource";


// DynamicSourceSplit
/** 
 * When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
**/
export class DynamicSourceSplit extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: DerivedSource;

  @Metadata({ data: "json, name=residual" })
  residual?: DerivedSource;
}
