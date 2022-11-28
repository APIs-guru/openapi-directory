import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAppsAppIdVersionsVersionStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}

export enum PostAppsAppIdVersionsVersionStatusModifiedByEnum {
    Developer = "developer",
    Administrator = "administrator"
}

export enum PostAppsAppIdVersionsVersionStatusStatusEnum {
    InReview = "inReview",
    Approved = "approved",
    Suspended = "suspended",
    Rejected = "rejected"
}


export class PostAppsAppIdVersionsVersionStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedBy" })
  modifiedBy?: PostAppsAppIdVersionsVersionStatusModifiedByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: PostAppsAppIdVersionsVersionStatusStatusEnum;
}


export class PostAppsAppIdVersionsVersionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdVersionsVersionStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: PostAppsAppIdVersionsVersionStatusQueryParams;
}


export class PostAppsAppIdVersionsVersionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
