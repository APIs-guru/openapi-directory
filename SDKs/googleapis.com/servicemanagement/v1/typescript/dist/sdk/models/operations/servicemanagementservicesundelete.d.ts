import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesUndeletePathParams extends SpeakeasyBase {
    serviceName: string;
}
export declare class ServicemanagementServicesUndeleteQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementServicesUndeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesUndeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesUndeleteSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesUndeleteSecurityOption1;
    option2?: ServicemanagementServicesUndeleteSecurityOption2;
}
export declare class ServicemanagementServicesUndeleteRequest extends SpeakeasyBase {
    pathParams: ServicemanagementServicesUndeletePathParams;
    queryParams: ServicemanagementServicesUndeleteQueryParams;
    security: ServicemanagementServicesUndeleteSecurity;
}
export declare class ServicemanagementServicesUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
