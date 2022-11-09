import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PlusPeopleListByActivityCollectionEnum {
    Plusoners = "plusoners"
,    Resharers = "resharers"
}


export class PlusPeopleListByActivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: PlusPeopleListByActivityCollectionEnum;
}


export class PlusPeopleListByActivityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class PlusPeopleListByActivitySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusPeopleListByActivitySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusPeopleListByActivitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PlusPeopleListByActivitySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PlusPeopleListByActivitySecurityOption2;
}


export class PlusPeopleListByActivityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlusPeopleListByActivityPathParams;

  @Metadata()
  queryParams: PlusPeopleListByActivityQueryParams;

  @Metadata()
  security: PlusPeopleListByActivitySecurity;
}


export class PlusPeopleListByActivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  peopleFeed?: shared.PeopleFeed;

  @Metadata()
  statusCode: number;
}
