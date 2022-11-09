import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetLkeVersionSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeVersionSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeVersionSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeVersionSecurityOption2;
}


export class GetLkeVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeVersionPathParams;

  @Metadata()
  security: GetLkeVersionSecurity;
}


export class GetLkeVersionDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeVersion?: shared.LkeVersion;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeVersionDefaultApplicationJsonObject?: GetLkeVersionDefaultApplicationJson;
}
