import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGenreImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetGenreImageQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ImageFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageIndex" })
  imageIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxHeight" })
  maxHeight?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxWidth" })
  maxWidth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=percentPlayed" })
  percentPlayed?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quality" })
  quality?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unplayedCount" })
  unplayedCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetGenreImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenreImagePathParams;

  @Metadata()
  queryParams: GetGenreImageQueryParams;
}


export class GetGenreImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getGenreImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
