import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DnsDnsKeysGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dnsKeyId" })
  dnsKeyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=managedZone" })
  managedZone: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class DnsDnsKeysGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" })
  clientOperationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=digestType" })
  digestType?: string;

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


export class DnsDnsKeysGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DnsDnsKeysGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DnsDnsKeysGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DnsDnsKeysGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DnsDnsKeysGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DnsDnsKeysGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DnsDnsKeysGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DnsDnsKeysGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DnsDnsKeysGetSecurityOption4;
}


export class DnsDnsKeysGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DnsDnsKeysGetPathParams;

  @Metadata()
  queryParams: DnsDnsKeysGetQueryParams;

  @Metadata()
  security: DnsDnsKeysGetSecurity;
}


export class DnsDnsKeysGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dnsKey?: shared.DnsKey;

  @Metadata()
  statusCode: number;
}
