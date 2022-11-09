import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SqlSslCertsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instance" })
  instance: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sha1Fingerprint" })
  sha1Fingerprint: string;
}


export class SqlSslCertsGetQueryParams extends SpeakeasyBase {
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


export class SqlSslCertsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlSslCertsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SqlSslCertsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SqlSslCertsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SqlSslCertsGetSecurityOption2;
}


export class SqlSslCertsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SqlSslCertsGetPathParams;

  @Metadata()
  queryParams: SqlSslCertsGetQueryParams;

  @Metadata()
  security: SqlSslCertsGetSecurity;
}


export class SqlSslCertsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sslCert?: shared.SslCert;

  @Metadata()
  statusCode: number;
}
