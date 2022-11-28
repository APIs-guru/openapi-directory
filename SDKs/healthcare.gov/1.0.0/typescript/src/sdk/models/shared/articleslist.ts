import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticlesListArticles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bite?: string;

  @SpeakeasyMetadata()
  categories?: string[][];

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  date?: string;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  featured?: boolean;

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
  related?: string[][];

  @SpeakeasyMetadata()
  seoKeywords?: string;

  @SpeakeasyMetadata()
  sort?: number;

  @SpeakeasyMetadata()
  tags?: any[][];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  titleShort?: string;

  @SpeakeasyMetadata()
  topics?: string[][];

  @SpeakeasyMetadata()
  url?: string;
}


export class ArticlesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ArticlesListArticles })
  articles?: ArticlesListArticles[];
}
