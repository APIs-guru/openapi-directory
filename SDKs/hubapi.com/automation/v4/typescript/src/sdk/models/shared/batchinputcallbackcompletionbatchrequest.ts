import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallbackCompletionBatchRequest } from "./callbackcompletionbatchrequest";



export class BatchInputCallbackCompletionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: CallbackCompletionBatchRequest })
  inputs: CallbackCompletionBatchRequest[];
}
