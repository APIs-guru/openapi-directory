import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAbsoluteRedirectNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetAbsoluteRedirectNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAbsoluteRedirectNPathParams;
}


export class GetAbsoluteRedirectNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
