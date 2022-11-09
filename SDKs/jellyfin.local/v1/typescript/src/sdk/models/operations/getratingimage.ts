import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRatingImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=theme" })
  theme: string;
}


export class GetRatingImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRatingImagePathParams;
}


export class GetRatingImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getRatingImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
