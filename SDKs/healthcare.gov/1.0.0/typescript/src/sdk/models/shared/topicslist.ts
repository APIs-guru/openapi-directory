import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TopicsListTopics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleorder?: string[][];

  @SpeakeasyMetadata()
  categories?: any[][];

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
  order?: number;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  published?: boolean;

  @SpeakeasyMetadata()
  sort?: number;

  @SpeakeasyMetadata()
  tags?: string[][];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  url?: string;
}


export class TopicsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TopicsListTopics })
  topics?: TopicsListTopics[];
}
