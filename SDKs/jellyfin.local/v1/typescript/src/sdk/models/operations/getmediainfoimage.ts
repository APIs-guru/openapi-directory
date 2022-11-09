import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMediaInfoImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=theme" })
  theme: string;
}


export class GetMediaInfoImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMediaInfoImagePathParams;
}


export class GetMediaInfoImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getMediaInfoImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
