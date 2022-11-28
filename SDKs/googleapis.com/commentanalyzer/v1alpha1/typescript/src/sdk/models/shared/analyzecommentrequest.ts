import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextEntry } from "./textentry";
import { Context } from "./context";
import { AttributeParameters } from "./attributeparameters";



// AnalyzeCommentRequest
/** 
 * The comment analysis request message.
**/
export class AnalyzeCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: TextEntry;

  @SpeakeasyMetadata({ data: "json, name=communityId" })
  communityId?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Context;

  @SpeakeasyMetadata({ data: "json, name=doNotStore" })
  doNotStore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=requestedAttributes", elemType: AttributeParameters })
  requestedAttributes?: Map<string, AttributeParameters>;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=spanAnnotations" })
  spanAnnotations?: boolean;
}
