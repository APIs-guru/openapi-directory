import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsTimeSeriesCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsTimeSeriesCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsTimeSeriesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesCreateSecurityOption1;
    option2?: MonitoringProjectsTimeSeriesCreateSecurityOption2;
    option3?: MonitoringProjectsTimeSeriesCreateSecurityOption3;
}
export declare class MonitoringProjectsTimeSeriesCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsTimeSeriesCreatePathParams;
    queryParams: MonitoringProjectsTimeSeriesCreateQueryParams;
    request?: shared.CreateTimeSeriesRequest;
    security: MonitoringProjectsTimeSeriesCreateSecurity;
}
export declare class MonitoringProjectsTimeSeriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
