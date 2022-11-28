import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PagespeedApiFormatStringV4ArgsRects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiFormatStringV4ArgsSecondaryRects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiFormatStringV4Args extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4ArgsRects })
  rects?: PagespeedApiFormatStringV4ArgsRects[];

  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4ArgsSecondaryRects })
  secondaryRects?: PagespeedApiFormatStringV4ArgsSecondaryRects[];

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}


export class PagespeedApiFormatStringV4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4Args })
  args?: PagespeedApiFormatStringV4Args[];

  @SpeakeasyMetadata()
  format?: string;
}
