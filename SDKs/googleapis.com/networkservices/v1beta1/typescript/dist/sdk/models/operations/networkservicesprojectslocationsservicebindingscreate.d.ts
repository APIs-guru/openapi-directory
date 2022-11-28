import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsServiceBindingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceBindingId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsServiceBindingsCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsServiceBindingsCreateQueryParams;
    request?: shared.ServiceBindingInput;
    security: NetworkservicesProjectsLocationsServiceBindingsCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsServiceBindingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
