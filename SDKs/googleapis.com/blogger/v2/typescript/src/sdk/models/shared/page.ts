import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageAuthorImage
/** 
 * The creator's avatar.
**/
export class PageAuthorImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PageAuthor
/** 
 * The author of this Page.
**/
export class PageAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: PageAuthorImage;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PageBlog
/** 
 * Data about the blog containing this Page.
**/
export class PageBlog extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}

export enum PageStatusEnum {
    Live = "LIVE"
,    Draft = "DRAFT"
,    SoftTrashed = "SOFT_TRASHED"
}


export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: PageAuthor;

  @Metadata({ data: "json, name=blog" })
  blog?: PageBlog;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=published" })
  published?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: PageStatusEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=trashed" })
  trashed?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
