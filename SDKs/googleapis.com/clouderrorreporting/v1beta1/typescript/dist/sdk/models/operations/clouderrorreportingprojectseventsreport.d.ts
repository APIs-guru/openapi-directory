import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsEventsReportPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class ClouderrorreportingProjectsEventsReportQueryParams extends SpeakeasyBase {
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
export declare class ClouderrorreportingProjectsEventsReportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsEventsReportRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsEventsReportPathParams;
    queryParams: ClouderrorreportingProjectsEventsReportQueryParams;
    request?: shared.ReportedErrorEvent;
    security: ClouderrorreportingProjectsEventsReportSecurity;
}
export declare class ClouderrorreportingProjectsEventsReportResponse extends SpeakeasyBase {
    contentType: string;
    reportErrorEventResponse?: Map<string, any>;
    statusCode: number;
}
