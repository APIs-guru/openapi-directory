import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentResponse } from "./documentresponse";
import { Moderation } from "./moderation";
export declare class HttpPost extends SpeakeasyBase {
    attachments?: DocumentResponse[];
    content?: string;
    createdAt?: Date;
    email?: string;
    id?: string;
    isFacilitatorPost?: boolean;
    moderation?: Moderation;
    title?: string;
}
