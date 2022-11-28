import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1QueryRangeQueryParams;
    request?: shared.QueryRangeRequest;
    security: MonitoringProjectsLocationPrometheusApiV1QueryRangeSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryRangeResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
