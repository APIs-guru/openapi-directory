import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveBroadcastsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    onBehalfOfContentOwnerChannel?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsUpdateSecurityOption1;
    option2?: YoutubeLiveBroadcastsUpdateSecurityOption2;
}
export declare class YoutubeLiveBroadcastsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsUpdateQueryParams;
    request?: shared.LiveBroadcast;
    security: YoutubeLiveBroadcastsUpdateSecurity;
}
export declare class YoutubeLiveBroadcastsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    liveBroadcast?: shared.LiveBroadcast;
    statusCode: number;
}
