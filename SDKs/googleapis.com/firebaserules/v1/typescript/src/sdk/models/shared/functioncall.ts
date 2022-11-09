import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FunctionCall
/** 
 * Represents a service-defined function call that was invoked during test execution.
**/
export class FunctionCall extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: any[];

  @Metadata({ data: "json, name=function" })
  function?: string;
}
