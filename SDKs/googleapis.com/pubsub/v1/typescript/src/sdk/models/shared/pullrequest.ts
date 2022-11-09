import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullRequest
/** 
 * Request for the `Pull` method.
**/
export class PullRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxMessages" })
  maxMessages?: number;

  @Metadata({ data: "json, name=returnImmediately" })
  returnImmediately?: boolean;
}
