import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDigestAuthQopUserPasswdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qop" })
  qop: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetDigestAuthQopUserPasswdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDigestAuthQopUserPasswdPathParams;
}


export class GetDigestAuthQopUserPasswdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
