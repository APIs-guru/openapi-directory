import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsTimeSeriesQueryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsTimeSeriesQueryQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesQuerySecurityOption1;
    option2?: MonitoringProjectsTimeSeriesQuerySecurityOption2;
    option3?: MonitoringProjectsTimeSeriesQuerySecurityOption3;
}
export declare class MonitoringProjectsTimeSeriesQueryRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsTimeSeriesQueryPathParams;
    queryParams: MonitoringProjectsTimeSeriesQueryQueryParams;
    request?: shared.QueryTimeSeriesRequest;
    security: MonitoringProjectsTimeSeriesQuerySecurity;
}
export declare class MonitoringProjectsTimeSeriesQueryResponse extends SpeakeasyBase {
    contentType: string;
    queryTimeSeriesResponse?: shared.QueryTimeSeriesResponse;
    statusCode: number;
}
