import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CallbackCompletionBatchRequest } from "./callbackcompletionbatchrequest";


export class BatchInputCallbackCompletionBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.CallbackCompletionBatchRequest })
  inputs: CallbackCompletionBatchRequest[];
}
