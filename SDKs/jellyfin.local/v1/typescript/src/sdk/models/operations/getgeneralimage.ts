import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneralImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class GetGeneralImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneralImagePathParams;
}


export class GetGeneralImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getGeneralImage200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
