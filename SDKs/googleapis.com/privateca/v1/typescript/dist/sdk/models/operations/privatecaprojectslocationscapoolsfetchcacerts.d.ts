import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams extends SpeakeasyBase {
    caPool: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams;
    request?: shared.FetchCaCertsRequest;
    security: PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse extends SpeakeasyBase {
    contentType: string;
    fetchCaCertsResponse?: shared.FetchCaCertsResponse;
    statusCode: number;
}
