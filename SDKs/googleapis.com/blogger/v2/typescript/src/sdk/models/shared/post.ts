import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// PostAuthorImage
/** 
 * The creator's avatar.
**/
export class PostAuthorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PostAuthor
/** 
 * The author of this Post.
**/
export class PostAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: PostAuthorImage;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PostBlog
/** 
 * Data about the blog containing this Post.
**/
export class PostBlog extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class PostImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PostLocation
/** 
 * The location for geotagged posts.
**/
export class PostLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=span" })
  span?: string;
}

export enum PostReaderCommentsEnum {
    Allow = "ALLOW"
,    DontAllowShowExisting = "DONT_ALLOW_SHOW_EXISTING"
,    DontAllowHideExisting = "DONT_ALLOW_HIDE_EXISTING"
}


// PostReplies
/** 
 * The container of comments on this Post.
**/
export class PostReplies extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Comment })
  items?: Comment[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: string;
}

export enum PostStatusEnum {
    Live = "LIVE"
,    Draft = "DRAFT"
,    Scheduled = "SCHEDULED"
,    SoftTrashed = "SOFT_TRASHED"
}


export class Post extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: PostAuthor;

  @Metadata({ data: "json, name=blog" })
  blog?: PostBlog;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=customMetaData" })
  customMetaData?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.PostImages })
  images?: PostImages[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=location" })
  location?: PostLocation;

  @Metadata({ data: "json, name=published" })
  published?: string;

  @Metadata({ data: "json, name=readerComments" })
  readerComments?: PostReaderCommentsEnum;

  @Metadata({ data: "json, name=replies" })
  replies?: PostReplies;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: PostStatusEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleLink" })
  titleLink?: string;

  @Metadata({ data: "json, name=trashed" })
  trashed?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
