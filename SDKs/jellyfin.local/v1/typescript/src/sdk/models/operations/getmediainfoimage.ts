import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMediaInfoImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=theme" })
  theme: string;
}


export class GetMediaInfoImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMediaInfoImagePathParams;
}


export class GetMediaInfoImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMediaInfoImage200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
