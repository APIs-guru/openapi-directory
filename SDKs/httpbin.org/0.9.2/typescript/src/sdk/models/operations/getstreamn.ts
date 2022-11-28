import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStreamNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetStreamNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStreamNPathParams;
}


export class GetStreamNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
