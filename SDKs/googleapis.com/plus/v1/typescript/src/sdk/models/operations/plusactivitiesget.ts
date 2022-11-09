import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlusActivitiesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}


export class PlusActivitiesGetQueryParams extends SpeakeasyBase {
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


export class PlusActivitiesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusActivitiesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusActivitiesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PlusActivitiesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PlusActivitiesGetSecurityOption2;
}


export class PlusActivitiesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlusActivitiesGetPathParams;

  @Metadata()
  queryParams: PlusActivitiesGetQueryParams;

  @Metadata()
  security: PlusActivitiesGetSecurity;
}


export class PlusActivitiesGetResponse extends SpeakeasyBase {
  @Metadata()
  activity?: shared.Activity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
