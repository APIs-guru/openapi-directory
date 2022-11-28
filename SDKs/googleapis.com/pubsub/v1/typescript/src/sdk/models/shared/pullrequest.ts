import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullRequest
/** 
 * Request for the `Pull` method.
**/
export class PullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxMessages" })
  maxMessages?: number;

  @SpeakeasyMetadata({ data: "json, name=returnImmediately" })
  returnImmediately?: boolean;
}
