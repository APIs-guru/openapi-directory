import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserImageByIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUserImageByIndexQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ImageFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" })
  maxHeight?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" })
  maxWidth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=percentPlayed" })
  percentPlayed?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unplayedCount" })
  unplayedCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetUserImageByIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserImageByIndexPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserImageByIndexQueryParams;
}


export class GetUserImageByIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserImageByIndex200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
