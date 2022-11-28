import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHiddenBasicAuthUserPasswdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetHiddenBasicAuthUserPasswdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHiddenBasicAuthUserPasswdPathParams;
}


export class GetHiddenBasicAuthUserPasswdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
