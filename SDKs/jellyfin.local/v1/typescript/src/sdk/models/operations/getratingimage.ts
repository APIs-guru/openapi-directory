import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRatingImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=theme" })
  theme: string;
}


export class GetRatingImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRatingImagePathParams;
}


export class GetRatingImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRatingImage200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
