import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FunctionCall
/** 
 * Represents a service-defined function call that was invoked during test execution.
**/
export class FunctionCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: any[];

  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;
}
