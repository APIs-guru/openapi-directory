import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCookiesSetNameValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class GetCookiesSetNameValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCookiesSetNameValuePathParams;
}


export class GetCookiesSetNameValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
