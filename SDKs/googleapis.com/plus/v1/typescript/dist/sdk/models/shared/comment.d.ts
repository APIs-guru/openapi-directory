import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Actor info specific to YouTube clients.
**/
export declare class CommentActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
**/
export declare class CommentActorClientSpecificActorInfo extends SpeakeasyBase {
    youtubeActorInfo?: CommentActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of this actor.
**/
export declare class CommentActorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * Verification status of actor.
**/
export declare class CommentActorVerification extends SpeakeasyBase {
    adHocVerified?: string;
}
/**
 * The person who posted this comment.
**/
export declare class CommentActor extends SpeakeasyBase {
    clientSpecificActorInfo?: CommentActorClientSpecificActorInfo;
    displayName?: string;
    id?: string;
    image?: CommentActorImage;
    url?: string;
    verification?: CommentActorVerification;
}
export declare class CommentInReplyTo extends SpeakeasyBase {
    id?: string;
    url?: string;
}
/**
 * The object of this comment.
**/
export declare class CommentObject extends SpeakeasyBase {
    content?: string;
    objectType?: string;
    originalContent?: string;
}
/**
 * People who +1'd this comment.
**/
export declare class CommentPlusoners extends SpeakeasyBase {
    totalItems?: number;
}
export declare class Comment extends SpeakeasyBase {
    actor?: CommentActor;
    etag?: string;
    id?: string;
    inReplyTo?: CommentInReplyTo[];
    kind?: string;
    object?: CommentObject;
    plusoners?: CommentPlusoners;
    published?: Date;
    selfLink?: string;
    updated?: Date;
    verb?: string;
}
