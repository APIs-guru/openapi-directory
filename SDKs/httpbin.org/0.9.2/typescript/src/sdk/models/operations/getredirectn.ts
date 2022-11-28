import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRedirectNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetRedirectNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRedirectNPathParams;
}


export class GetRedirectNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
