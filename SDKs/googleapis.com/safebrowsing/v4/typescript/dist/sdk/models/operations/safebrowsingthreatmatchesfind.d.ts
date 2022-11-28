import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingThreatMatchesFindQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingThreatMatchesFindRequest extends SpeakeasyBase {
    queryParams: SafebrowsingThreatMatchesFindQueryParams;
    request?: shared.GoogleSecuritySafebrowsingV4FindThreatMatchesRequest;
}
export declare class SafebrowsingThreatMatchesFindResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4FindThreatMatchesResponse?: shared.GoogleSecuritySafebrowsingV4FindThreatMatchesResponse;
    statusCode: number;
}
