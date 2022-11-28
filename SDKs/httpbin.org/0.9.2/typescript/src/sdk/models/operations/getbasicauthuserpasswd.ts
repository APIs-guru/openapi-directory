import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBasicAuthUserPasswdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetBasicAuthUserPasswdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBasicAuthUserPasswdPathParams;
}


export class GetBasicAuthUserPasswdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
