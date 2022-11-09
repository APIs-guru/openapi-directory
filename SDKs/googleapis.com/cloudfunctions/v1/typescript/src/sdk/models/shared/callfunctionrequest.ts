import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CallFunctionRequest
/** 
 * Request for the `CallFunction` method.
**/
export class CallFunctionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;
}
