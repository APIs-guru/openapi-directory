import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdMembersMemberIdActivitiesPathParams extends SpeakeasyBase {
    memberId: string;
    workspaceId: string;
}
export declare enum GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceIdMembersMemberIdActivitiesItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceIdMembersMemberIdActivitiesSortEnum {
    OccurredAt = "occurred_at",
    Member = "member"
}
export declare class GetWorkspaceIdMembersMemberIdActivitiesQueryParams extends SpeakeasyBase {
    activityType?: string;
    direction?: GetWorkspaceIdMembersMemberIdActivitiesDirectionEnum;
    items?: GetWorkspaceIdMembersMemberIdActivitiesItemsEnum;
    page?: string;
    sort?: GetWorkspaceIdMembersMemberIdActivitiesSortEnum;
    type?: string;
}
export declare class GetWorkspaceIdMembersMemberIdActivitiesSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdMembersMemberIdActivitiesRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdMembersMemberIdActivitiesPathParams;
    queryParams: GetWorkspaceIdMembersMemberIdActivitiesQueryParams;
    security: GetWorkspaceIdMembersMemberIdActivitiesSecurity;
}
export declare class GetWorkspaceIdMembersMemberIdActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
