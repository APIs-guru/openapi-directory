import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicecontrolServicesReportPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicecontrolServicesReportQueryParams extends SpeakeasyBase {
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
export declare class ServicecontrolServicesReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesReportSecurity extends SpeakeasyBase {
    option1?: ServicecontrolServicesReportSecurityOption1;
    option2?: ServicecontrolServicesReportSecurityOption2;
}
export declare class ServicecontrolServicesReportRequest extends SpeakeasyBase {
    pathParams: ServicecontrolServicesReportPathParams;
    queryParams: ServicecontrolServicesReportQueryParams;
    request?: shared.ReportRequest;
    security: ServicecontrolServicesReportSecurity;
}
export declare class ServicecontrolServicesReportResponse extends SpeakeasyBase {
    contentType: string;
    reportResponse?: shared.ReportResponse;
    statusCode: number;
}
