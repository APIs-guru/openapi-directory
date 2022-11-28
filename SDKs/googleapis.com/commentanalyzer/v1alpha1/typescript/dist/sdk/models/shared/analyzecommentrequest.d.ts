import { SpeakeasyBase } from "../../../internal/utils";
import { TextEntry } from "./textentry";
import { Context } from "./context";
import { AttributeParameters } from "./attributeparameters";
/**
 * The comment analysis request message.
**/
export declare class AnalyzeCommentRequest extends SpeakeasyBase {
    clientToken?: string;
    comment?: TextEntry;
    communityId?: string;
    context?: Context;
    doNotStore?: boolean;
    languages?: string[];
    requestedAttributes?: Map<string, AttributeParameters>;
    sessionId?: string;
    spanAnnotations?: boolean;
}
