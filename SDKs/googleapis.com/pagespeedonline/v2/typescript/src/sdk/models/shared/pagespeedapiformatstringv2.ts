import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PagespeedApiFormatStringV2ArgsRects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiFormatStringV2ArgsSecondaryRects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  left?: number;

  @SpeakeasyMetadata()
  top?: number;

  @SpeakeasyMetadata()
  width?: number;
}


export class PagespeedApiFormatStringV2Args extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2ArgsRects })
  rects?: PagespeedApiFormatStringV2ArgsRects[];

  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2ArgsSecondaryRects })
  secondaryRects?: PagespeedApiFormatStringV2ArgsSecondaryRects[];

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}


export class PagespeedApiFormatStringV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2Args })
  args?: PagespeedApiFormatStringV2Args[];

  @SpeakeasyMetadata()
  format?: string;
}
