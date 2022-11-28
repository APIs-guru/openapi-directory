import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SafebrowsingThreatHitsCreateQueryParams extends SpeakeasyBase {
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
export declare class SafebrowsingThreatHitsCreateRequest extends SpeakeasyBase {
    queryParams: SafebrowsingThreatHitsCreateQueryParams;
    request?: shared.GoogleSecuritySafebrowsingV4ThreatHit;
}
export declare class SafebrowsingThreatHitsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
