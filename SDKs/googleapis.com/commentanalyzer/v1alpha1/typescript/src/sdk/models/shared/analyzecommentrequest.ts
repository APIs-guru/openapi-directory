import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextEntry } from "./textentry";
import { Context } from "./context";
import { AttributeParameters } from "./attributeparameters";


// AnalyzeCommentRequest
/** 
 * The comment analysis request message.
**/
export class AnalyzeCommentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: TextEntry;

  @Metadata({ data: "json, name=communityId" })
  communityId?: string;

  @Metadata({ data: "json, name=context" })
  context?: Context;

  @Metadata({ data: "json, name=doNotStore" })
  doNotStore?: boolean;

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=requestedAttributes", elemType: shared.AttributeParameters })
  requestedAttributes?: Map<string, AttributeParameters>;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=spanAnnotations" })
  spanAnnotations?: boolean;
}
