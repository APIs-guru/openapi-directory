import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PagespeedApiImageV2PageRect
/** 
 * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
**/
export class PagespeedApiImageV2PageRect extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiImageV2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: string;

  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  mimeType?: string;

  @SpeakeasyMetadata()
  pageRect?: PagespeedApiImageV2PageRect;

  @SpeakeasyMetadata()
  width?: number;
}
