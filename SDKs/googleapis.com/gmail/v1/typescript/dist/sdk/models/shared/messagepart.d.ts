import { SpeakeasyBase } from "../../../internal/utils";
import { MessagePartBody } from "./messagepartbody";
import { MessagePartHeader } from "./messagepartheader";
/**
 * A single MIME message part.
**/
export declare class MessagePart extends SpeakeasyBase {
    body?: MessagePartBody;
    filename?: string;
    headers?: MessagePartHeader[];
    mimeType?: string;
    partId?: string;
    parts?: MessagePart[];
}
