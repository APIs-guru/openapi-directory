import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsTlsRoutesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tlsRouteId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsTlsRoutesCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams;
    request?: shared.TlsRouteInput;
    security: NetworkservicesProjectsLocationsTlsRoutesCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
