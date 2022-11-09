import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CallFunctionResponse
/** 
 * Response of `CallFunction` method.
**/
export class CallFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;
}
