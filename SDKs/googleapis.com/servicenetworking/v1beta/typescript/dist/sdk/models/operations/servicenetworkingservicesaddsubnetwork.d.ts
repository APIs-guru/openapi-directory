import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesAddSubnetworkPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesAddSubnetworkQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesAddSubnetworkSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesAddSubnetworkSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesAddSubnetworkSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesAddSubnetworkSecurityOption1;
    option2?: ServicenetworkingServicesAddSubnetworkSecurityOption2;
}
export declare class ServicenetworkingServicesAddSubnetworkRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesAddSubnetworkPathParams;
    queryParams: ServicenetworkingServicesAddSubnetworkQueryParams;
    request?: shared.AddSubnetworkRequest;
    security: ServicenetworkingServicesAddSubnetworkSecurity;
}
export declare class ServicenetworkingServicesAddSubnetworkResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
