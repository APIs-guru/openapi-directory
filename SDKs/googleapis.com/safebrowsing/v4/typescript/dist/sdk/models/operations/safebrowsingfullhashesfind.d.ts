import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingFullHashesFindQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingFullHashesFindRequest extends SpeakeasyBase {
    queryParams: SafebrowsingFullHashesFindQueryParams;
    request?: shared.GoogleSecuritySafebrowsingV4FindFullHashesRequest;
}
export declare class SafebrowsingFullHashesFindResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4FindFullHashesResponse?: shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse;
    statusCode: number;
}
