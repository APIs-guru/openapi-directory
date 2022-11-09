import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsEndpointsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IdsProjectsLocationsEndpointsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endpointId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdsProjectsLocationsEndpointsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsEndpointsCreateRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsEndpointsCreatePathParams;
    queryParams: IdsProjectsLocationsEndpointsCreateQueryParams;
    request?: shared.Endpoint;
    security: IdsProjectsLocationsEndpointsCreateSecurity;
}
export declare class IdsProjectsLocationsEndpointsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
