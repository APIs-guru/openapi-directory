import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsUptimeCheckConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringProjectsUptimeCheckConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsUptimeCheckConfigsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1;
    option2?: MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2;
}
export declare class MonitoringProjectsUptimeCheckConfigsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsUptimeCheckConfigsCreatePathParams;
    queryParams: MonitoringProjectsUptimeCheckConfigsCreateQueryParams;
    request?: shared.UptimeCheckConfig;
    security: MonitoringProjectsUptimeCheckConfigsCreateSecurity;
}
export declare class MonitoringProjectsUptimeCheckConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uptimeCheckConfig?: shared.UptimeCheckConfig;
}
