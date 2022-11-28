import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsTlsRoutesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesPatchRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsTlsRoutesPatchPathParams;
    queryParams: NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams;
    request?: shared.TlsRouteInput;
    security: NetworkservicesProjectsLocationsTlsRoutesPatchSecurity;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
