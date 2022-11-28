import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStreamBytesNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetStreamBytesNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStreamBytesNPathParams;
}


export class GetStreamBytesNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
