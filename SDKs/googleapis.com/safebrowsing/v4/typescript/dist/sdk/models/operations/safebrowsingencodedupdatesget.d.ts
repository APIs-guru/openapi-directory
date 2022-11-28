import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingEncodedUpdatesGetPathParams extends SpeakeasyBase {
    encodedRequest: string;
}
export declare class SafebrowsingEncodedUpdatesGetQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingEncodedUpdatesGetRequest extends SpeakeasyBase {
    pathParams: SafebrowsingEncodedUpdatesGetPathParams;
    queryParams: SafebrowsingEncodedUpdatesGetQueryParams;
}
export declare class SafebrowsingEncodedUpdatesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse?: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
    statusCode: number;
}
