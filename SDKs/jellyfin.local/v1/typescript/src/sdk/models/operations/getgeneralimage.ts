import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeneralImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class GetGeneralImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeneralImagePathParams;
}


export class GetGeneralImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGeneralImage200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
