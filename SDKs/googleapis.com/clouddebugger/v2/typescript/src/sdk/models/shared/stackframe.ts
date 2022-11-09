import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variable } from "./variable";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";


// StackFrame
/** 
 * Represents a stack frame context.
**/
export class StackFrame extends SpeakeasyBase {
  @Metadata({ data: "json, name=arguments", elemType: shared.Variable })
  arguments?: Variable[];

  @Metadata({ data: "json, name=function" })
  function?: string;

  @Metadata({ data: "json, name=locals", elemType: shared.Variable })
  locals?: Variable[];

  @Metadata({ data: "json, name=location" })
  location?: SourceLocation;
}
