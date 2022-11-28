import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommentActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class CommentActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;
}


// CommentActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class CommentActorClientSpecificActorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: CommentActorClientSpecificActorInfoYoutubeActorInfo;
}


// CommentActorImage
/** 
 * The image representation of this actor.
**/
export class CommentActorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// CommentActorVerification
/** 
 * Verification status of actor.
**/
export class CommentActorVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// CommentActor
/** 
 * The person who posted this comment.
**/
export class CommentActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: CommentActorClientSpecificActorInfo;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: CommentActorImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: CommentActorVerification;
}


export class CommentInReplyTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// CommentObject
/** 
 * The object of this comment.
**/
export class CommentObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=originalContent" })
  originalContent?: string;
}


// CommentPlusoners
/** 
 * People who +1'd this comment.
**/
export class CommentPlusoners extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actor" })
  actor?: CommentActor;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inReplyTo", elemType: CommentInReplyTo })
  inReplyTo?: CommentInReplyTo[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: CommentObject;

  @SpeakeasyMetadata({ data: "json, name=plusoners" })
  plusoners?: CommentPlusoners;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: Date;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=verb" })
  verb?: string;
}
