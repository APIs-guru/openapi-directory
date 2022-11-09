import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Post } from "./post";


// BlogLocale
/** 
 * The locale this Blog is set to.
**/
export class BlogLocale extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=variant" })
  variant?: string;
}


// BlogPages
/** 
 * The container of pages in this blog.
**/
export class BlogPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// BlogPosts
/** 
 * The container of posts in this blog.
**/
export class BlogPosts extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Post })
  items?: Post[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}

export enum BlogStatusEnum {
    Live = "LIVE"
,    Deleted = "DELETED"
}


export class Blog extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMetaData" })
  customMetaData?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: BlogLocale;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pages" })
  pages?: BlogPages;

  @Metadata({ data: "json, name=posts" })
  posts?: BlogPosts;

  @Metadata({ data: "json, name=published" })
  published?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=status" })
  status?: BlogStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
