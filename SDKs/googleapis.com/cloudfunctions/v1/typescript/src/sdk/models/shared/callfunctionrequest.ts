import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CallFunctionRequest
/** 
 * Request for the `CallFunction` method.
**/
export class CallFunctionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;
}
