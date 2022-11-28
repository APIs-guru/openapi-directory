import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesPathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1SeriesSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1SeriesPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1SeriesQueryParams;
    request?: shared.QuerySeriesRequest;
    security: MonitoringProjectsLocationPrometheusApiV1SeriesSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1SeriesResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
