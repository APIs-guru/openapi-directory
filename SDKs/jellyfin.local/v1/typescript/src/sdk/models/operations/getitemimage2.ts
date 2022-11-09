import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemImage2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.ImageFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxHeight" })
  maxHeight: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=maxWidth" })
  maxWidth: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=percentPlayed" })
  percentPlayed: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=unplayedCount" })
  unplayedCount: number;
}


export class GetItemImage2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" })
  addPlayedIndicator?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=blur" })
  blur?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" })
  cropWhitespace?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" })
  foregroundLayer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetItemImage2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemImage2PathParams;

  @Metadata()
  queryParams: GetItemImage2QueryParams;
}


export class GetItemImage2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getItemImage2200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
