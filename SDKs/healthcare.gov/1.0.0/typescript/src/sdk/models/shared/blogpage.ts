import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BlogPage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: string[][];

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  date?: string;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  lang?: string;

  @SpeakeasyMetadata()
  layout?: string;

  @SpeakeasyMetadata()
  metaDescription?: string;

  @SpeakeasyMetadata()
  metaTitle?: string;

  @SpeakeasyMetadata()
  path?: string;

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
