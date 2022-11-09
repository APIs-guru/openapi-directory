import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommentAuthorImage
/** 
 * The creator's avatar.
**/
export class CommentAuthorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// CommentAuthor
/** 
 * The author of this Comment.
**/
export class CommentAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: CommentAuthorImage;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// CommentBlog
/** 
 * Data about the blog containing this comment.
**/
export class CommentBlog extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


// CommentInReplyTo
/** 
 * Data about the comment this is in reply to.
**/
export class CommentInReplyTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


// CommentPost
/** 
 * Data about the post containing this comment.
**/
export class CommentPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}

export enum CommentStatusEnum {
    Live = "LIVE"
,    Emptied = "EMPTIED"
,    Pending = "PENDING"
,    Spam = "SPAM"
}


export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: CommentAuthor;

  @Metadata({ data: "json, name=blog" })
  blog?: CommentBlog;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inReplyTo" })
  inReplyTo?: CommentInReplyTo;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=post" })
  post?: CommentPost;

  @Metadata({ data: "json, name=published" })
  published?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: CommentStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}
