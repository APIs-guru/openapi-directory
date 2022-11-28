import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsMetricDescriptorsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsMetricDescriptorsListQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsMetricDescriptorsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsMetricDescriptorsListSecurityOption1;
    option2?: MonitoringProjectsMetricDescriptorsListSecurityOption2;
    option3?: MonitoringProjectsMetricDescriptorsListSecurityOption3;
    option4?: MonitoringProjectsMetricDescriptorsListSecurityOption4;
}
export declare class MonitoringProjectsMetricDescriptorsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsMetricDescriptorsListPathParams;
    queryParams: MonitoringProjectsMetricDescriptorsListQueryParams;
    security: MonitoringProjectsMetricDescriptorsListSecurity;
}
export declare class MonitoringProjectsMetricDescriptorsListResponse extends SpeakeasyBase {
    contentType: string;
    listMetricDescriptorsResponse?: shared.ListMetricDescriptorsResponse;
    statusCode: number;
}
