import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommentAuthorImage
/** 
 * The creator's avatar.
**/
export class CommentAuthorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// CommentAuthor
/** 
 * The author of this Comment.
**/
export class CommentAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: CommentAuthorImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// CommentBlog
/** 
 * Data about the blog containing this comment.
**/
export class CommentBlog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// CommentInReplyTo
/** 
 * Data about the comment this is in reply to.
**/
export class CommentInReplyTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// CommentPost
/** 
 * Data about the post containing this comment.
**/
export class CommentPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum CommentStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}


export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: CommentAuthor;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: CommentBlog;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inReplyTo" })
  inReplyTo?: CommentInReplyTo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: CommentPost;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CommentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}
