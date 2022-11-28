import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: any[][];

  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  date?: string;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  experience?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  lang?: string;

  @SpeakeasyMetadata()
  layout?: string;

  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  published?: boolean;

  @SpeakeasyMetadata()
  sort?: number;

  @SpeakeasyMetadata()
  tags?: any[][];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  url?: string;
}
