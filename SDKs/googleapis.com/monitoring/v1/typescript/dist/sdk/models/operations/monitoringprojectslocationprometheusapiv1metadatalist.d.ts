import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListPathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    limit?: string;
    metric?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1MetadataListPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1MetadataListQueryParams;
    security: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
