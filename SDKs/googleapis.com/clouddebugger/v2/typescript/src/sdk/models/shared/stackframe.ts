import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";



// StackFrame
/** 
 * Represents a stack frame context.
**/
export class StackFrame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments", elemType: Variable })
  arguments?: Variable[];

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=locals", elemType: Variable })
  locals?: Variable[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: SourceLocation;
}
