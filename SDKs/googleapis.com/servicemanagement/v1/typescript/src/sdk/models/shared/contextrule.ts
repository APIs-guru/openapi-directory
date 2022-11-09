import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContextRule
/** 
 * A context rule provides information about the context for an individual API element.
**/
export class ContextRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedRequestExtensions" })
  allowedRequestExtensions?: string[];

  @Metadata({ data: "json, name=allowedResponseExtensions" })
  allowedResponseExtensions?: string[];

  @Metadata({ data: "json, name=provided" })
  provided?: string[];

  @Metadata({ data: "json, name=requested" })
  requested?: string[];

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
