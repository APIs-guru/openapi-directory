import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HeadItemImage2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.ImageFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxHeight" })
  maxHeight: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxWidth" })
  maxWidth: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=percentPlayed" })
  percentPlayed: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unplayedCount" })
  unplayedCount: number;
}


export class HeadItemImage2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" })
  addPlayedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blur" })
  blur?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" })
  cropWhitespace?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" })
  foregroundLayer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class HeadItemImage2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HeadItemImage2PathParams;

  @SpeakeasyMetadata()
  queryParams: HeadItemImage2QueryParams;
}


export class HeadItemImage2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headItemImage2200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
