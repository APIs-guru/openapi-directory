import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHiddenBasicAuthUserPasswdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetHiddenBasicAuthUserPasswdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHiddenBasicAuthUserPasswdPathParams;
}


export class GetHiddenBasicAuthUserPasswdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
