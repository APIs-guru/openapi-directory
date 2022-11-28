import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsPathParams extends SpeakeasyBase {
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1LabelsSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1LabelsPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1LabelsQueryParams;
    request?: shared.ListLabelsRequest;
    security: MonitoringProjectsLocationPrometheusApiV1LabelsSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelsResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
