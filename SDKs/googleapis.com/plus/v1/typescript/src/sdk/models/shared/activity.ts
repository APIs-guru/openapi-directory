import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";
import { Place } from "./place";



// ActivityActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class ActivityActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;
}


// ActivityActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class ActivityActorClientSpecificActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: ActivityActorClientSpecificActorInfoYoutubeActorInfo;
}


// ActivityActorImage
/** 
 * The image representation of the actor.
**/
export class ActivityActorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ActivityActorName
/** 
 * An object representation of the individual components of name.
**/
export class ActivityActorName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}


// ActivityActorVerification
/** 
 * Verification status of actor.
**/
export class ActivityActorVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// ActivityActor
/** 
 * The person who performed this activity.
**/
export class ActivityActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: ActivityActorClientSpecificActorInfo;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ActivityActorImage;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ActivityActorName;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: ActivityActorVerification;
}


// ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;
}


// ActivityObjectActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class ActivityObjectActorClientSpecificActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
}


// ActivityObjectActorImage
/** 
 * The image representation of the original actor.
**/
export class ActivityObjectActorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectActorVerification
/** 
 * Verification status of actor.
**/
export class ActivityObjectActorVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// ActivityObjectActor
/** 
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
**/
export class ActivityObjectActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: ActivityObjectActorClientSpecificActorInfo;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ActivityObjectActorImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: ActivityObjectActorVerification;
}


// ActivityObjectAttachmentsEmbed
/** 
 * If the attachment is a video, the embeddable link.
**/
export class ActivityObjectAttachmentsEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectAttachmentsFullImage
/** 
 * The full image URL for photo attachments.
**/
export class ActivityObjectAttachmentsFullImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// ActivityObjectAttachmentsImage
/** 
 * The preview image for photos or videos.
**/
export class ActivityObjectAttachmentsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// ActivityObjectAttachmentsThumbnailsImage
/** 
 * Image resource.
**/
export class ActivityObjectAttachmentsThumbnailsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class ActivityObjectAttachmentsThumbnails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ActivityObjectAttachmentsThumbnailsImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ActivityObjectAttachments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed?: ActivityObjectAttachmentsEmbed;

  @SpeakeasyMetadata({ data: "json, name=fullImage" })
  fullImage?: ActivityObjectAttachmentsFullImage;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ActivityObjectAttachmentsImage;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnails", elemType: ActivityObjectAttachmentsThumbnails })
  thumbnails?: ActivityObjectAttachmentsThumbnails[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ActivityObjectPlusoners
/** 
 * People who +1'd this activity.
**/
export class ActivityObjectPlusoners extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObjectReplies
/** 
 * Comments in reply to this activity.
**/
export class ActivityObjectReplies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObjectResharers
/** 
 * People who reshared this activity.
**/
export class ActivityObjectResharers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// ActivityObject
/** 
 * The object of this activity.
**/
export class ActivityObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: ActivityObjectActor;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ActivityObjectAttachments })
  attachments?: ActivityObjectAttachments[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=originalContent" })
  originalContent?: string;

  @SpeakeasyMetadata({ data: "json, name=plusoners" })
  plusoners?: ActivityObjectPlusoners;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: ActivityObjectReplies;

  @SpeakeasyMetadata({ data: "json, name=resharers" })
  resharers?: ActivityObjectResharers;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ActivityProvider
/** 
 * The service provider that initially published this activity.
**/
export class ActivityProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Acl;

  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: ActivityActor;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: string;

  @SpeakeasyMetadata({ data: "json, name=crosspostSource" })
  crosspostSource?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=geocode" })
  geocode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Place;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: ActivityObject;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=placeName" })
  placeName?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ActivityProvider;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: Date;

  @SpeakeasyMetadata({ data: "json, name=radius" })
  radius?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verb" })
  verb?: string;
}
