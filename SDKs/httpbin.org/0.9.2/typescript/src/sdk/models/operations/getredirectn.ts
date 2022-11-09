import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRedirectNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetRedirectNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRedirectNPathParams;
}


export class GetRedirectNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
