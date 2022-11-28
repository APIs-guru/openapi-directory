import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams extends SpeakeasyBase {
    label: string;
    location: string;
    name: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams;
    queryParams: MonitoringProjectsLocationPrometheusApiV1LabelValuesQueryParams;
    security: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse extends SpeakeasyBase {
    contentType: string;
    httpBody?: shared.HttpBody;
    statusCode: number;
}
