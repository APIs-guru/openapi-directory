import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PlusActivitiesSearchOrderByEnum {
    Best = "best"
,    Recent = "recent"
}


export class PlusActivitiesSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: PlusActivitiesSearchOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class PlusActivitiesSearchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusActivitiesSearchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusActivitiesSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PlusActivitiesSearchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PlusActivitiesSearchSecurityOption2;
}


export class PlusActivitiesSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PlusActivitiesSearchQueryParams;

  @Metadata()
  security: PlusActivitiesSearchSecurity;
}


export class PlusActivitiesSearchResponse extends SpeakeasyBase {
  @Metadata()
  activityFeed?: shared.ActivityFeed;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
