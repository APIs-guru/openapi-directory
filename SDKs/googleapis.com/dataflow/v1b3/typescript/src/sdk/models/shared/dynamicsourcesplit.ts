import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";



// DynamicSourceSplit
/** 
 * When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
**/
export class DynamicSourceSplit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: DerivedSource;

  @SpeakeasyMetadata({ data: "json, name=residual" })
  residual?: DerivedSource;
}
