import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1QueryPathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QuerySecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1QuerySecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1QueryPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1QueryQueryParams;
    request?: shared.QueryInstantRequest;
    security: MonitoringProjectsLocationPrometheusApiV1QuerySecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
