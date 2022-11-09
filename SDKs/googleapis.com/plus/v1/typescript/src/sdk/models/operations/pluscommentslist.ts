import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlusCommentsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: string;
}

export enum PlusCommentsListSortOrderEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class PlusCommentsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: PlusCommentsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class PlusCommentsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusCommentsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PlusCommentsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PlusCommentsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PlusCommentsListSecurityOption2;
}


export class PlusCommentsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlusCommentsListPathParams;

  @Metadata()
  queryParams: PlusCommentsListQueryParams;

  @Metadata()
  security: PlusCommentsListSecurity;
}


export class PlusCommentsListResponse extends SpeakeasyBase {
  @Metadata()
  commentFeed?: shared.CommentFeed;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
