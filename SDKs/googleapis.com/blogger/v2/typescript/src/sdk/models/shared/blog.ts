import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";



// BlogLocale
/** 
 * The locale this Blog is set to.
**/
export class BlogLocale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: string;
}


// BlogPages
/** 
 * The container of pages in this blog.
**/
export class BlogPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}


// BlogPosts
/** 
 * The container of posts in this blog.
**/
export class BlogPosts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Post })
  items?: Post[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}

export enum BlogStatusEnum {
    Live = "LIVE",
    Deleted = "DELETED"
}


export class Blog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMetaData" })
  customMetaData?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: BlogLocale;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: BlogPages;

  @SpeakeasyMetadata({ data: "json, name=posts" })
  posts?: BlogPosts;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BlogStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
