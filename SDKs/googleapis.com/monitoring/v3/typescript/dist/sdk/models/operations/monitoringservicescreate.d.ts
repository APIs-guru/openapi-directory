import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringServicesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringServicesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesCreateSecurityOption1;
    option2?: MonitoringServicesCreateSecurityOption2;
}
export declare class MonitoringServicesCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesCreatePathParams;
    queryParams: MonitoringServicesCreateQueryParams;
    request?: shared.ServiceInput;
    security: MonitoringServicesCreateSecurity;
}
export declare class MonitoringServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
