import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCookiesSetNameValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class GetCookiesSetNameValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCookiesSetNameValuePathParams;
}


export class GetCookiesSetNameValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
