import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompletionResult } from "./completionresult";
import { ResponseMetadata } from "./responsemetadata";



// CompleteQueryResponse
/** 
 * Output only. Response of auto-complete query.
**/
export class CompleteQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionResults", elemType: CompletionResult })
  completionResults?: CompletionResult[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;
}
