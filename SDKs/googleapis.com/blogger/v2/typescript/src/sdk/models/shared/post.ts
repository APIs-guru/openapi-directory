import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// PostAuthorImage
/** 
 * The creator's avatar.
**/
export class PostAuthorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PostAuthor
/** 
 * The author of this Post.
**/
export class PostAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PostAuthorImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PostBlog
/** 
 * Data about the blog containing this Post.
**/
export class PostBlog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class PostImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PostLocation
/** 
 * The location for geotagged posts.
**/
export class PostLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=span" })
  span?: string;
}

export enum PostReaderCommentsEnum {
    Allow = "ALLOW",
    DontAllowShowExisting = "DONT_ALLOW_SHOW_EXISTING",
    DontAllowHideExisting = "DONT_ALLOW_HIDE_EXISTING"
}


// PostReplies
/** 
 * The container of comments on this Post.
**/
export class PostReplies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Comment })
  items?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: string;
}

export enum PostStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    Scheduled = "SCHEDULED",
    SoftTrashed = "SOFT_TRASHED"
}


export class Post extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: PostAuthor;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: PostBlog;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=customMetaData" })
  customMetaData?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: PostImages })
  images?: PostImages[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: PostLocation;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: string;

  @SpeakeasyMetadata({ data: "json, name=readerComments" })
  readerComments?: PostReaderCommentsEnum;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: PostReplies;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleLink" })
  titleLink?: string;

  @SpeakeasyMetadata({ data: "json, name=trashed" })
  trashed?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
