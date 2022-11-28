import { SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActorInput } from "./actor";
/**
 * Represents a file attached to a support case.
**/
export declare class Attachment extends SpeakeasyBase {
    createTime?: string;
    creator?: Actor;
    filename?: string;
    mimeType?: string;
    name?: string;
    sizeBytes?: string;
}
/**
 * Represents a file attached to a support case.
**/
export declare class AttachmentInput extends SpeakeasyBase {
    creator?: ActorInput;
    filename?: string;
}
