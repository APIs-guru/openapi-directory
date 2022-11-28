import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetFactorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ResetFactorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetFactorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;
}


export class ResetFactorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
