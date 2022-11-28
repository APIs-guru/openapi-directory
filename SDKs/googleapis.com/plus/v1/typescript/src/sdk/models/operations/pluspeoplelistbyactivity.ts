import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PlusPeopleListByActivityCollectionEnum {
    Plusoners = "plusoners",
    Resharers = "resharers"
}


export class PlusPeopleListByActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: PlusPeopleListByActivityCollectionEnum;
}


export class PlusPeopleListByActivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class PlusPeopleListByActivitySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusPeopleListByActivitySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusPeopleListByActivitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: PlusPeopleListByActivitySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: PlusPeopleListByActivitySecurityOption2;
}


export class PlusPeopleListByActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlusPeopleListByActivityPathParams;

  @SpeakeasyMetadata()
  queryParams: PlusPeopleListByActivityQueryParams;

  @SpeakeasyMetadata()
  security: PlusPeopleListByActivitySecurity;
}


export class PlusPeopleListByActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  peopleFeed?: shared.PeopleFeed;

  @SpeakeasyMetadata()
  statusCode: number;
}
