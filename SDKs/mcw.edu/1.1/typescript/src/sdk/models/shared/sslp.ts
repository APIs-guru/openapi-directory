import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Sslp extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expectedSize?: number;

  @SpeakeasyMetadata()
  forwardSeq?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  reverseSeq?: string;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  sslpType?: string;

  @SpeakeasyMetadata()
  templateSeq?: string;
}
