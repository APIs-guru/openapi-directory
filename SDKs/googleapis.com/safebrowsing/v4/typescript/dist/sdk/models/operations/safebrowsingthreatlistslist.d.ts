import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingThreatListsListQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingThreatListsListRequest extends SpeakeasyBase {
    queryParams: SafebrowsingThreatListsListQueryParams;
}
export declare class SafebrowsingThreatListsListResponse extends SpeakeasyBase {
    contentType: string;
    googleSecuritySafebrowsingV4ListThreatListsResponse?: shared.GoogleSecuritySafebrowsingV4ListThreatListsResponse;
    statusCode: number;
}
