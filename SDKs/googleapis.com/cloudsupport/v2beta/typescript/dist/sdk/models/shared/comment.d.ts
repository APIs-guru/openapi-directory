import { SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActorInput } from "./actor";
/**
 * A comment associated with a support case.
**/
export declare class Comment extends SpeakeasyBase {
    body?: string;
    createTime?: string;
    creator?: Actor;
    name?: string;
    plainTextBody?: string;
}
/**
 * A comment associated with a support case.
**/
export declare class CommentInput extends SpeakeasyBase {
    body?: string;
    creator?: ActorInput;
}
