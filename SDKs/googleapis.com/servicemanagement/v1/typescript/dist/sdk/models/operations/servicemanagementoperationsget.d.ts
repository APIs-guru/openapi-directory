import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicemanagementOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class ServicemanagementOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementOperationsGetSecurity extends SpeakeasyBase {
    option1?: ServicemanagementOperationsGetSecurityOption1;
    option2?: ServicemanagementOperationsGetSecurityOption2;
}
export declare class ServicemanagementOperationsGetRequest extends SpeakeasyBase {
    pathParams: ServicemanagementOperationsGetPathParams;
    queryParams: ServicemanagementOperationsGetQueryParams;
    security: ServicemanagementOperationsGetSecurity;
}
export declare class ServicemanagementOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
