import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsTimeSeriesCreateServicePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsTimeSeriesCreateServiceSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesCreateServiceSecurityOption1;
    option2?: MonitoringProjectsTimeSeriesCreateServiceSecurityOption2;
    option3?: MonitoringProjectsTimeSeriesCreateServiceSecurityOption3;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsTimeSeriesCreateServicePathParams;
    queryParams: MonitoringProjectsTimeSeriesCreateServiceQueryParams;
    request?: shared.CreateTimeSeriesRequest;
    security: MonitoringProjectsTimeSeriesCreateServiceSecurity;
}
export declare class MonitoringProjectsTimeSeriesCreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
