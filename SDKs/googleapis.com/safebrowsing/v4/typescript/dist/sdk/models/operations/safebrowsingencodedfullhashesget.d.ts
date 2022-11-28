import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingEncodedFullHashesGetPathParams extends SpeakeasyBase {
    encodedRequest: string;
}
export declare class SafebrowsingEncodedFullHashesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientId?: string;
    clientVersion?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SafebrowsingEncodedFullHashesGetRequest extends SpeakeasyBase {
    pathParams: SafebrowsingEncodedFullHashesGetPathParams;
    queryParams: SafebrowsingEncodedFullHashesGetQueryParams;
}
export declare class SafebrowsingEncodedFullHashesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4FindFullHashesResponse?: shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse;
    statusCode: number;
}
