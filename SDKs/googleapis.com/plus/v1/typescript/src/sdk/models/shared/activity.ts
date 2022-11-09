import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Acl } from "./acl";
import { Place } from "./place";


// ActivityActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class ActivityActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;
}


// ActivityActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class ActivityActorClientSpecificActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: ActivityActorClientSpecificActorInfoYoutubeActorInfo;
}


// ActivityActorImage
/** 
 * The image representation of the actor.
**/
export class ActivityActorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ActivityActorName
/** 
 * An object representation of the individual components of name.
**/
export class ActivityActorName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;
}


// ActivityActorVerification
/** 
 * Verification status of actor.
**/
export class ActivityActorVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// ActivityActor
/** 
 * The person who performed this activity.
**/
export class ActivityActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: ActivityActorClientSpecificActorInfo;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: ActivityActorImage;

  @Metadata({ data: "json, name=name" })
  name?: ActivityActorName;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verification" })
  verification?: ActivityActorVerification;
}


// ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;
}


// ActivityObjectActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class ActivityObjectActorClientSpecificActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
}


// ActivityObjectActorImage
/** 
 * The image representation of the original actor.
**/
export class ActivityObjectActorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectActorVerification
/** 
 * Verification status of actor.
**/
export class ActivityObjectActorVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// ActivityObjectActor
/** 
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
**/
export class ActivityObjectActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: ActivityObjectActorClientSpecificActorInfo;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: ActivityObjectActorImage;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verification" })
  verification?: ActivityObjectActorVerification;
}


// ActivityObjectAttachmentsEmbed
/** 
 * If the attachment is a video, the embeddable link.
**/
export class ActivityObjectAttachmentsEmbed extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectAttachmentsFullImage
/** 
 * The full image URL for photo attachments.
**/
export class ActivityObjectAttachmentsFullImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// ActivityObjectAttachmentsImage
/** 
 * The preview image for photos or videos.
**/
export class ActivityObjectAttachmentsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// ActivityObjectAttachmentsThumbnailsImage
/** 
 * Image resource.
**/
export class ActivityObjectAttachmentsThumbnailsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class ActivityObjectAttachmentsThumbnails extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=image" })
  image?: ActivityObjectAttachmentsThumbnailsImage;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ActivityObjectAttachments extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=embed" })
  embed?: ActivityObjectAttachmentsEmbed;

  @Metadata({ data: "json, name=fullImage" })
  fullImage?: ActivityObjectAttachmentsFullImage;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: ActivityObjectAttachmentsImage;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=thumbnails", elemType: shared.ActivityObjectAttachmentsThumbnails })
  thumbnails?: ActivityObjectAttachmentsThumbnails[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectPlusoners
/** 
 * People who +1'd this activity.
**/
export class ActivityObjectPlusoners extends SpeakeasyBase {
  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObjectReplies
/** 
 * Comments in reply to this activity.
**/
export class ActivityObjectReplies extends SpeakeasyBase {
  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObjectResharers
/** 
 * People who reshared this activity.
**/
export class ActivityObjectResharers extends SpeakeasyBase {
  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObject
/** 
 * The object of this activity.
**/
export class ActivityObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: ActivityObjectActor;

  @Metadata({ data: "json, name=attachments", elemType: shared.ActivityObjectAttachments })
  attachments?: ActivityObjectAttachments[];

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=originalContent" })
  originalContent?: string;

  @Metadata({ data: "json, name=plusoners" })
  plusoners?: ActivityObjectPlusoners;

  @Metadata({ data: "json, name=replies" })
  replies?: ActivityObjectReplies;

  @Metadata({ data: "json, name=resharers" })
  resharers?: ActivityObjectResharers;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// ActivityProvider
/** 
 * The service provider that initially published this activity.
**/
export class ActivityProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: Acl;

  @Metadata({ data: "json, name=actor" })
  actor?: ActivityActor;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=annotation" })
  annotation?: string;

  @Metadata({ data: "json, name=crosspostSource" })
  crosspostSource?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=geocode" })
  geocode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: Place;

  @Metadata({ data: "json, name=object" })
  object?: ActivityObject;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=placeName" })
  placeName?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: ActivityProvider;

  @Metadata({ data: "json, name=published" })
  published?: Date;

  @Metadata({ data: "json, name=radius" })
  radius?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verb" })
  verb?: string;
}
