import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdMembersMemberIdActivitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}

export enum GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum {
    Asc = "ASC"
,    Desc = "DESC"
}

export enum GetWorkspaceIdMembersMemberIdActivitiesItemsEnum {
    Ten = "10"
,    Fifty = "50"
,    OneHundred = "100"
}

export enum GetWorkspaceIdMembersMemberIdActivitiesSortEnum {
    OccurredAt = "occurred_at"
,    Member = "member"
}


export class GetWorkspaceIdMembersMemberIdActivitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activity_type" })
  activityType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=items" })
  items?: GetWorkspaceIdMembersMemberIdActivitiesItemsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetWorkspaceIdMembersMemberIdActivitiesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetWorkspaceIdMembersMemberIdActivitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersMemberIdActivitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdMembersMemberIdActivitiesPathParams;

  @Metadata()
  queryParams: GetWorkspaceIdMembersMemberIdActivitiesQueryParams;

  @Metadata()
  security: GetWorkspaceIdMembersMemberIdActivitiesSecurity;
}


export class GetWorkspaceIdMembersMemberIdActivitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
