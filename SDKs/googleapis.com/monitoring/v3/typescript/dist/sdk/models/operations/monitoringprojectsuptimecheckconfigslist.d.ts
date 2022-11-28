import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsUptimeCheckConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringProjectsUptimeCheckConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsUptimeCheckConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsUptimeCheckConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsUptimeCheckConfigsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsUptimeCheckConfigsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsUptimeCheckConfigsListSecurityOption1;
    option2?: MonitoringProjectsUptimeCheckConfigsListSecurityOption2;
    option3?: MonitoringProjectsUptimeCheckConfigsListSecurityOption3;
}
export declare class MonitoringProjectsUptimeCheckConfigsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsUptimeCheckConfigsListPathParams;
    queryParams: MonitoringProjectsUptimeCheckConfigsListQueryParams;
    security: MonitoringProjectsUptimeCheckConfigsListSecurity;
}
export declare class MonitoringProjectsUptimeCheckConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listUptimeCheckConfigsResponse?: shared.ListUptimeCheckConfigsResponse;
    statusCode: number;
}
