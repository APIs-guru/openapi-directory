import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    end?: string;
    fields?: string;
    key?: string;
    match?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    start?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1LabelsListPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1LabelsListQueryParams;
    security: MonitoringProjectsLocationPrometheusApiV1LabelsListSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsListResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
