import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesUpdateConnectionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicenetworkingServicesUpdateConnectionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicenetworkingServicesUpdateConnectionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesUpdateConnectionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesUpdateConnectionsSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesUpdateConnectionsSecurityOption1;
    option2?: ServicenetworkingServicesUpdateConnectionsSecurityOption2;
}
export declare class ServicenetworkingServicesUpdateConnectionsRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesUpdateConnectionsPathParams;
    queryParams: ServicenetworkingServicesUpdateConnectionsQueryParams;
    request?: shared.GoogleCloudServicenetworkingV1betaConnection;
    security: ServicenetworkingServicesUpdateConnectionsSecurity;
}
export declare class ServicenetworkingServicesUpdateConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
