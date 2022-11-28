import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsGroupsMembersListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsGroupsMembersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    intervalEndTime?: string;
    intervalStartTime?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsGroupsMembersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsMembersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsMembersListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsMembersListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsGroupsMembersListSecurityOption1;
    option2?: MonitoringProjectsGroupsMembersListSecurityOption2;
    option3?: MonitoringProjectsGroupsMembersListSecurityOption3;
}
export declare class MonitoringProjectsGroupsMembersListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsGroupsMembersListPathParams;
    queryParams: MonitoringProjectsGroupsMembersListQueryParams;
    security: MonitoringProjectsGroupsMembersListSecurity;
}
export declare class MonitoringProjectsGroupsMembersListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupMembersResponse?: shared.ListGroupMembersResponse;
    statusCode: number;
}
