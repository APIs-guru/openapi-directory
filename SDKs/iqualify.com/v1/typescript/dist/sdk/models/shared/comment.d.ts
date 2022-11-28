import { SpeakeasyBase } from "../../../internal/utils";
import { Moderation } from "./moderation";
export declare class Comment extends SpeakeasyBase {
    content?: string;
    createdAt?: Date;
    email?: string;
    id?: string;
    isFacilitatorPost?: boolean;
    moderation?: Moderation;
    parentCommentId?: string;
    postId?: string;
}
