import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveBroadcastsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeLiveBroadcastsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsInsertSecurityOption1;
    option2?: YoutubeLiveBroadcastsInsertSecurityOption2;
}
export declare class YoutubeLiveBroadcastsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsInsertQueryParams;
    request?: shared.LiveBroadcast;
    security: YoutubeLiveBroadcastsInsertSecurity;
}
export declare class YoutubeLiveBroadcastsInsertResponse extends SpeakeasyBase {
    contentType: string;
    liveBroadcast?: shared.LiveBroadcast;
    statusCode: number;
}
