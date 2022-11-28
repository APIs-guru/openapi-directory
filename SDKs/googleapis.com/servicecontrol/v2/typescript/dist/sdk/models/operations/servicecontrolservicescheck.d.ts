import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicecontrolServicesCheckPathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicecontrolServicesCheckQueryParams extends SpeakeasyBase {
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
export declare class ServicecontrolServicesCheckSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesCheckSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicecontrolServicesCheckSecurity extends SpeakeasyBase {
    option1?: ServicecontrolServicesCheckSecurityOption1;
    option2?: ServicecontrolServicesCheckSecurityOption2;
}
export declare class ServicecontrolServicesCheckRequest extends SpeakeasyBase {
    pathParams: ServicecontrolServicesCheckPathParams;
    queryParams: ServicecontrolServicesCheckQueryParams;
    request?: shared.CheckRequest;
    security: ServicecontrolServicesCheckSecurity;
}
export declare class ServicecontrolServicesCheckResponse extends SpeakeasyBase {
    checkResponse?: shared.CheckResponse;
    contentType: string;
    statusCode: number;
}
