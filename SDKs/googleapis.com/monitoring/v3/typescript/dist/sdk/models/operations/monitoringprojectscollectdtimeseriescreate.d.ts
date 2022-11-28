import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsCollectdTimeSeriesCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1;
    option2?: MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2;
    option3?: MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsCollectdTimeSeriesCreatePathParams;
    queryParams: MonitoringProjectsCollectdTimeSeriesCreateQueryParams;
    request?: shared.CreateCollectdTimeSeriesRequest;
    security: MonitoringProjectsCollectdTimeSeriesCreateSecurity;
}
export declare class MonitoringProjectsCollectdTimeSeriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    createCollectdTimeSeriesResponse?: shared.CreateCollectdTimeSeriesResponse;
    statusCode: number;
}
