import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BlogListBlog extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: string[][];

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  date?: string;

  @SpeakeasyMetadata()
  lang?: string;

  @SpeakeasyMetadata()
  layout?: string;

  @SpeakeasyMetadata()
  metaDescription?: string;

  @SpeakeasyMetadata()
  metaTitle?: string;

  @SpeakeasyMetadata()
  published?: boolean;

  @SpeakeasyMetadata()
  seoKeywords?: string;

  @SpeakeasyMetadata()
  sort?: number;

  @SpeakeasyMetadata()
  tags?: any[][];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  topics?: string[][];

  @SpeakeasyMetadata()
  url?: string;
}


export class BlogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BlogListBlog, elemDepth: 2 })
  blog?: BlogListBlog[][];
}
