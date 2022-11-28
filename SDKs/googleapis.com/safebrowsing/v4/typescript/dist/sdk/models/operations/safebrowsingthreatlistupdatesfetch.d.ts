import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingThreatListUpdatesFetchQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingThreatListUpdatesFetchRequest extends SpeakeasyBase {
    queryParams: SafebrowsingThreatListUpdatesFetchQueryParams;
    request?: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest;
}
export declare class SafebrowsingThreatListUpdatesFetchResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4FetchThreatListUpdatesResponse?: shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
    statusCode: number;
}
