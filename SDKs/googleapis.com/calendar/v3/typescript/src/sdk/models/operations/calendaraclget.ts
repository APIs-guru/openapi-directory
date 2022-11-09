import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalendarAclGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=calendarId" })
  calendarId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class CalendarAclGetQueryParams extends SpeakeasyBase {
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


export class CalendarAclGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarAclGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CalendarAclGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CalendarAclGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CalendarAclGetSecurityOption2;
}


export class CalendarAclGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalendarAclGetPathParams;

  @Metadata()
  queryParams: CalendarAclGetQueryParams;

  @Metadata()
  security: CalendarAclGetSecurity;
}


export class CalendarAclGetResponse extends SpeakeasyBase {
  @Metadata()
  aclRule?: shared.AclRule;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
