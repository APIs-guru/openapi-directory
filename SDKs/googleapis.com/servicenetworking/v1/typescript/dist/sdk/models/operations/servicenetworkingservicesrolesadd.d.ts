import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesRolesAddPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesRolesAddQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesRolesAddSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesRolesAddSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesRolesAddSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesRolesAddSecurityOption1;
    option2?: ServicenetworkingServicesRolesAddSecurityOption2;
}
export declare class ServicenetworkingServicesRolesAddRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesRolesAddPathParams;
    queryParams: ServicenetworkingServicesRolesAddQueryParams;
    request?: shared.AddRolesRequest;
    security: ServicenetworkingServicesRolesAddSecurity;
}
export declare class ServicenetworkingServicesRolesAddResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
