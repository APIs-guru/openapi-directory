import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceIdMembersMemberIdActivitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}

export enum GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}

export enum GetWorkspaceIdMembersMemberIdActivitiesItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}

export enum GetWorkspaceIdMembersMemberIdActivitiesSortEnum {
    OccurredAt = "occurred_at",
    Member = "member"
}


export class GetWorkspaceIdMembersMemberIdActivitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_type" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=items" })
  items?: GetWorkspaceIdMembersMemberIdActivitiesItemsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWorkspaceIdMembersMemberIdActivitiesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetWorkspaceIdMembersMemberIdActivitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersMemberIdActivitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceIdMembersMemberIdActivitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspaceIdMembersMemberIdActivitiesQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspaceIdMembersMemberIdActivitiesSecurity;
}


export class GetWorkspaceIdMembersMemberIdActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
