import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Reference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  citation?: string;

  @SpeakeasyMetadata()
  doi?: string;

  @SpeakeasyMetadata()
  editors?: string;

  @SpeakeasyMetadata()
  issue?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  pages?: string;

  @SpeakeasyMetadata()
  pubDate?: Date;

  @SpeakeasyMetadata()
  pubStatus?: string;

  @SpeakeasyMetadata()
  publication?: string;

  @SpeakeasyMetadata()
  publisher?: string;

  @SpeakeasyMetadata()
  publisherCity?: string;

  @SpeakeasyMetadata()
  refAbstract?: string;

  @SpeakeasyMetadata()
  referenceType?: string;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  urlWebReference?: string;

  @SpeakeasyMetadata()
  volume?: string;
}
