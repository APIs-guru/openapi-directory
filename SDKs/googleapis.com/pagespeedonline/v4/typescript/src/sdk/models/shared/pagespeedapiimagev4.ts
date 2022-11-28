import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PagespeedApiImageV4PageRect extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiImageV4 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: string;

  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  mimeType?: string;

  @SpeakeasyMetadata()
  pageRect?: PagespeedApiImageV4PageRect;

  @SpeakeasyMetadata()
  width?: number;
}
