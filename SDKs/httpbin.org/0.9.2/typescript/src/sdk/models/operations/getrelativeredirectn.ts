import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelativeRedirectNPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=n" })
  n: number;
}


export class GetRelativeRedirectNRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRelativeRedirectNPathParams;
}


export class GetRelativeRedirectNResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
