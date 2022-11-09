import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesConnectionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    network?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicenetworkingServicesConnectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesConnectionsListSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesConnectionsListSecurityOption1;
    option2?: ServicenetworkingServicesConnectionsListSecurityOption2;
}
export declare class ServicenetworkingServicesConnectionsListRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesConnectionsListPathParams;
    queryParams: ServicenetworkingServicesConnectionsListQueryParams;
    security: ServicenetworkingServicesConnectionsListSecurity;
}
export declare class ServicenetworkingServicesConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
