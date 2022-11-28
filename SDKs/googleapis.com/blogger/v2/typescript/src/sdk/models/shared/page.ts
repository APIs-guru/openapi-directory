import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageAuthorImage
/** 
 * The creator's avatar.
**/
export class PageAuthorImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PageAuthor
/** 
 * The author of this Page.
**/
export class PageAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PageAuthorImage;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PageBlog
/** 
 * Data about the blog containing this Page.
**/
export class PageBlog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum PageStatusEnum {
    Live = "LIVE",
    Draft = "DRAFT",
    SoftTrashed = "SOFT_TRASHED"
}


export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: PageAuthor;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: PageBlog;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=trashed" })
  trashed?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
