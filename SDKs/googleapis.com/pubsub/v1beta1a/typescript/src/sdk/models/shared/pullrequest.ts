import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullRequest
/** 
 * Request for the Pull method.
**/
export class PullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnImmediately" })
  returnImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
