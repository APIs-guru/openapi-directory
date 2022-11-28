import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAbsoluteRedirectNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetAbsoluteRedirectNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAbsoluteRedirectNPathParams;
}


export class GetAbsoluteRedirectNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
