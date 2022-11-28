import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveBroadcastsBindQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
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
    streamId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsBindSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsBindSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsBindSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsBindSecurityOption1;
    option2?: YoutubeLiveBroadcastsBindSecurityOption2;
}
export declare class YoutubeLiveBroadcastsBindRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsBindQueryParams;
    security: YoutubeLiveBroadcastsBindSecurity;
}
export declare class YoutubeLiveBroadcastsBindResponse extends SpeakeasyBase {
    contentType: string;
    liveBroadcast?: shared.LiveBroadcast;
    statusCode: number;
}
