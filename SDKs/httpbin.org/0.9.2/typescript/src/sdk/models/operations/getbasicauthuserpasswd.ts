import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBasicAuthUserPasswdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=passwd" })
  passwd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetBasicAuthUserPasswdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBasicAuthUserPasswdPathParams;
}


export class GetBasicAuthUserPasswdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
