import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelativeRedirectNPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetRelativeRedirectNRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRelativeRedirectNPathParams;
}


export class GetRelativeRedirectNResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
