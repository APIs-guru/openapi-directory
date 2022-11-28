import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesGenerateConfigReportQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesGenerateConfigReportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGenerateConfigReportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesGenerateConfigReportSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesGenerateConfigReportSecurityOption1;
    option2?: ServicemanagementServicesGenerateConfigReportSecurityOption2;
}
export declare class ServicemanagementServicesGenerateConfigReportRequest extends SpeakeasyBase {
    queryParams: ServicemanagementServicesGenerateConfigReportQueryParams;
    request?: shared.GenerateConfigReportRequest;
    security: ServicemanagementServicesGenerateConfigReportSecurity;
}
export declare class ServicemanagementServicesGenerateConfigReportResponse extends SpeakeasyBase {
    contentType: string;
    generateConfigReportResponse?: shared.GenerateConfigReportResponse;
    statusCode: number;
}
