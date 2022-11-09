import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SqlConnectGenerateEphemeralPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class SqlConnectGenerateEphemeralQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SqlConnectGenerateEphemeralSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlConnectGenerateEphemeralSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlConnectGenerateEphemeralSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SqlConnectGenerateEphemeralSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SqlConnectGenerateEphemeralSecurityOption2;
}


export class SqlConnectGenerateEphemeralRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SqlConnectGenerateEphemeralPathParams;

  @Metadata()
  queryParams: SqlConnectGenerateEphemeralQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GenerateEphemeralCertRequest;

  @Metadata()
  security: SqlConnectGenerateEphemeralSecurity;
}


export class SqlConnectGenerateEphemeralResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  generateEphemeralCertResponse?: shared.GenerateEphemeralCertResponse;

  @Metadata()
  statusCode: number;
}
