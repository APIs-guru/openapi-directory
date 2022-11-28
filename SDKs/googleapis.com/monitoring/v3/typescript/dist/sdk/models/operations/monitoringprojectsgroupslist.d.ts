import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsGroupsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    ancestorsOfGroup?: string;
    callback?: string;
    childrenOfGroup?: string;
    descendantsOfGroup?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsGroupsListSecurityOption1;
    option2?: MonitoringProjectsGroupsListSecurityOption2;
    option3?: MonitoringProjectsGroupsListSecurityOption3;
}
export declare class MonitoringProjectsGroupsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsGroupsListPathParams;
    queryParams: MonitoringProjectsGroupsListQueryParams;
    security: MonitoringProjectsGroupsListSecurity;
}
export declare class MonitoringProjectsGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupsResponse?: shared.ListGroupsResponse;
    statusCode: number;
}
