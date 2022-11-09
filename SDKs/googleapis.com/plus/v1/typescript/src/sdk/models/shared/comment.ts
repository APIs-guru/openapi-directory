import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// CommentActorClientSpecificActorInfoYoutubeActorInfo
/** 
 * Actor info specific to YouTube clients.
**/
export class CommentActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;
}


// CommentActorClientSpecificActorInfo
/** 
 * Actor info specific to particular clients.
**/
export class CommentActorClientSpecificActorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=youtubeActorInfo" })
  youtubeActorInfo?: CommentActorClientSpecificActorInfoYoutubeActorInfo;
}


// CommentActorImage
/** 
 * The image representation of this actor.
**/
export class CommentActorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// CommentActorVerification
/** 
 * Verification status of actor.
**/
export class CommentActorVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=adHocVerified" })
  adHocVerified?: string;
}


// CommentActor
/** 
 * The person who posted this comment.
**/
export class CommentActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSpecificActorInfo" })
  clientSpecificActorInfo?: CommentActorClientSpecificActorInfo;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: CommentActorImage;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verification" })
  verification?: CommentActorVerification;
}


export class CommentInReplyTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// CommentObject
/** 
 * The object of this comment.
**/
export class CommentObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=originalContent" })
  originalContent?: string;
}


// CommentPlusoners
/** 
 * People who +1'd this comment.
**/
export class CommentPlusoners extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=actor" })
  actor?: CommentActor;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inReplyTo", elemType: shared.CommentInReplyTo })
  inReplyTo?: CommentInReplyTo[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=object" })
  object?: CommentObject;

  @Metadata({ data: "json, name=plusoners" })
  plusoners?: CommentPlusoners;

  @Metadata({ data: "json, name=published" })
  published?: Date;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=verb" })
  verb?: string;
}
