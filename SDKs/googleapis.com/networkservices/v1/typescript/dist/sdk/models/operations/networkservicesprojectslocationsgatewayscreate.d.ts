import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsGatewaysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsGatewaysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gatewayId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsGatewaysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsGatewaysCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsGatewaysCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsGatewaysCreateQueryParams;
    request?: shared.GatewayInput;
    security: NetworkservicesProjectsLocationsGatewaysCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsGatewaysCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
