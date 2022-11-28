import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBytesNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetBytesNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBytesNPathParams;
}


export class GetBytesNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
