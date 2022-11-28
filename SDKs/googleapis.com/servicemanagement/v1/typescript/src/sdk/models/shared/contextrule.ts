import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContextRule
/** 
 * A context rule provides information about the context for an individual API element.
**/
export class ContextRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedRequestExtensions" })
  allowedRequestExtensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowedResponseExtensions" })
  allowedResponseExtensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=provided" })
  provided?: string[];

  @SpeakeasyMetadata({ data: "json, name=requested" })
  requested?: string[];

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
