import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAppsAppIdVersionsVersionStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}

export enum PostAppsAppIdVersionsVersionStatusModifiedByEnum {
    Developer = "developer"
,    Administrator = "administrator"
}

export enum PostAppsAppIdVersionsVersionStatusStatusEnum {
    InReview = "inReview"
,    Approved = "approved"
,    Suspended = "suspended"
,    Rejected = "rejected"
}


export class PostAppsAppIdVersionsVersionStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modifiedBy" })
  modifiedBy?: PostAppsAppIdVersionsVersionStatusModifiedByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: PostAppsAppIdVersionsVersionStatusStatusEnum;
}


export class PostAppsAppIdVersionsVersionStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdVersionsVersionStatusPathParams;

  @Metadata()
  queryParams: PostAppsAppIdVersionsVersionStatusQueryParams;
}


export class PostAppsAppIdVersionsVersionStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
