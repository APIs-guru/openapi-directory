import { SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";
import { Place } from "./place";
/**
 * Actor info specific to YouTube clients.
**/
export declare class ActivityActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
**/
export declare class ActivityActorClientSpecificActorInfo extends SpeakeasyBase {
    youtubeActorInfo?: ActivityActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of the actor.
**/
export declare class ActivityActorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * An object representation of the individual components of name.
**/
export declare class ActivityActorName extends SpeakeasyBase {
    familyName?: string;
    givenName?: string;
}
/**
 * Verification status of actor.
**/
export declare class ActivityActorVerification extends SpeakeasyBase {
    adHocVerified?: string;
}
/**
 * The person who performed this activity.
**/
export declare class ActivityActor extends SpeakeasyBase {
    clientSpecificActorInfo?: ActivityActorClientSpecificActorInfo;
    displayName?: string;
    id?: string;
    image?: ActivityActorImage;
    name?: ActivityActorName;
    url?: string;
    verification?: ActivityActorVerification;
}
/**
 * Actor info specific to YouTube clients.
**/
export declare class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
**/
export declare class ActivityObjectActorClientSpecificActorInfo extends SpeakeasyBase {
    youtubeActorInfo?: ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of the original actor.
**/
export declare class ActivityObjectActorImage extends SpeakeasyBase {
    url?: string;
}
/**
 * Verification status of actor.
**/
export declare class ActivityObjectActorVerification extends SpeakeasyBase {
    adHocVerified?: string;
}
/**
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
**/
export declare class ActivityObjectActor extends SpeakeasyBase {
    clientSpecificActorInfo?: ActivityObjectActorClientSpecificActorInfo;
    displayName?: string;
    id?: string;
    image?: ActivityObjectActorImage;
    url?: string;
    verification?: ActivityObjectActorVerification;
}
/**
 * If the attachment is a video, the embeddable link.
**/
export declare class ActivityObjectAttachmentsEmbed extends SpeakeasyBase {
    type?: string;
    url?: string;
}
/**
 * The full image URL for photo attachments.
**/
export declare class ActivityObjectAttachmentsFullImage extends SpeakeasyBase {
    height?: number;
    type?: string;
    url?: string;
    width?: number;
}
/**
 * The preview image for photos or videos.
**/
export declare class ActivityObjectAttachmentsImage extends SpeakeasyBase {
    height?: number;
    type?: string;
    url?: string;
    width?: number;
}
/**
 * Image resource.
**/
export declare class ActivityObjectAttachmentsThumbnailsImage extends SpeakeasyBase {
    height?: number;
    type?: string;
    url?: string;
    width?: number;
}
export declare class ActivityObjectAttachmentsThumbnails extends SpeakeasyBase {
    description?: string;
    image?: ActivityObjectAttachmentsThumbnailsImage;
    url?: string;
}
export declare class ActivityObjectAttachments extends SpeakeasyBase {
    content?: string;
    displayName?: string;
    embed?: ActivityObjectAttachmentsEmbed;
    fullImage?: ActivityObjectAttachmentsFullImage;
    id?: string;
    image?: ActivityObjectAttachmentsImage;
    objectType?: string;
    thumbnails?: ActivityObjectAttachmentsThumbnails[];
    url?: string;
}
/**
 * People who +1'd this activity.
**/
export declare class ActivityObjectPlusoners extends SpeakeasyBase {
    selfLink?: string;
    totalItems?: number;
}
/**
 * Comments in reply to this activity.
**/
export declare class ActivityObjectReplies extends SpeakeasyBase {
    selfLink?: string;
    totalItems?: number;
}
/**
 * People who reshared this activity.
**/
export declare class ActivityObjectResharers extends SpeakeasyBase {
    selfLink?: string;
    totalItems?: number;
}
/**
 * The object of this activity.
**/
export declare class ActivityObject extends SpeakeasyBase {
    actor?: ActivityObjectActor;
    attachments?: ActivityObjectAttachments[];
    content?: string;
    id?: string;
    objectType?: string;
    originalContent?: string;
    plusoners?: ActivityObjectPlusoners;
    replies?: ActivityObjectReplies;
    resharers?: ActivityObjectResharers;
    url?: string;
}
/**
 * The service provider that initially published this activity.
**/
export declare class ActivityProvider extends SpeakeasyBase {
    title?: string;
}
export declare class Activity extends SpeakeasyBase {
    access?: Acl;
    actor?: ActivityActor;
    address?: string;
    annotation?: string;
    crosspostSource?: string;
    etag?: string;
    geocode?: string;
    id?: string;
    kind?: string;
    location?: Place;
    object?: ActivityObject;
    placeId?: string;
    placeName?: string;
    provider?: ActivityProvider;
    published?: Date;
    radius?: string;
    title?: string;
    updated?: Date;
    url?: string;
    verb?: string;
}
