import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Oauth2UserinfoV2MeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class Oauth2UserinfoV2MeGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Oauth2UserinfoV2MeGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Oauth2UserinfoV2MeGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Oauth2UserinfoV2MeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: Oauth2UserinfoV2MeGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: Oauth2UserinfoV2MeGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: Oauth2UserinfoV2MeGetSecurityOption3;
}


export class Oauth2UserinfoV2MeGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: Oauth2UserinfoV2MeGetQueryParams;

  @Metadata()
  security: Oauth2UserinfoV2MeGetSecurity;
}


export class Oauth2UserinfoV2MeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userinfo?: shared.Userinfo;
}
