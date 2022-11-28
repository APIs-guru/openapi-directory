import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CallFunctionResponse
/** 
 * Response of `CallFunction` method.
**/
export class CallFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;
}
