import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompletionResult } from "./completionresult";
import { ResponseMetadata } from "./responsemetadata";


// CompleteQueryResponse
/** 
 * Output only. Response of auto-complete query.
**/
export class CompleteQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionResults", elemType: shared.CompletionResult })
  completionResults?: CompletionResult[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;
}
