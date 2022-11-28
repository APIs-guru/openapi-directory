import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeLiveBroadcastsTransitionBroadcastStatusEnum {
    StatusUnspecified = "statusUnspecified",
    Testing = "testing",
    Live = "live",
    Complete = "complete"
}
export declare class YoutubeLiveBroadcastsTransitionQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    broadcastStatus: YoutubeLiveBroadcastsTransitionBroadcastStatusEnum;
    callback?: string;
    fields?: string;
    id: string;
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
export declare class YoutubeLiveBroadcastsTransitionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsTransitionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsTransitionSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsTransitionSecurityOption1;
    option2?: YoutubeLiveBroadcastsTransitionSecurityOption2;
}
export declare class YoutubeLiveBroadcastsTransitionRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsTransitionQueryParams;
    security: YoutubeLiveBroadcastsTransitionSecurity;
}
export declare class YoutubeLiveBroadcastsTransitionResponse extends SpeakeasyBase {
    contentType: string;
    liveBroadcast?: shared.LiveBroadcast;
    statusCode: number;
}
