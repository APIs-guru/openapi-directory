import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsMetricDescriptorsCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsMetricDescriptorsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsMetricDescriptorsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsMetricDescriptorsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsMetricDescriptorsCreateSecurityOption1;
    option2?: MonitoringProjectsMetricDescriptorsCreateSecurityOption2;
    option3?: MonitoringProjectsMetricDescriptorsCreateSecurityOption3;
}
export declare class MonitoringProjectsMetricDescriptorsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsMetricDescriptorsCreatePathParams;
    queryParams: MonitoringProjectsMetricDescriptorsCreateQueryParams;
    request?: shared.MetricDescriptor;
    security: MonitoringProjectsMetricDescriptorsCreateSecurity;
}
export declare class MonitoringProjectsMetricDescriptorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    metricDescriptor?: shared.MetricDescriptor;
    statusCode: number;
}
