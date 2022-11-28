import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsTlsRoutesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesGetQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsTlsRoutesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesGetRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsTlsRoutesGetPathParams;
    queryParams: NetworkservicesProjectsLocationsTlsRoutesGetQueryParams;
    security: NetworkservicesProjectsLocationsTlsRoutesGetSecurity;
}
export declare class NetworkservicesProjectsLocationsTlsRoutesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tlsRoute?: shared.TlsRoute;
}
