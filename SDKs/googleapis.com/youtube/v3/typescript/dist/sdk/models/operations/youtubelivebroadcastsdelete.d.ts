import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeLiveBroadcastsDeleteQueryParams extends SpeakeasyBase {
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
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeLiveBroadcastsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeLiveBroadcastsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeLiveBroadcastsDeleteSecurityOption1;
    option2?: YoutubeLiveBroadcastsDeleteSecurityOption2;
}
export declare class YoutubeLiveBroadcastsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeLiveBroadcastsDeleteQueryParams;
    security: YoutubeLiveBroadcastsDeleteSecurity;
}
export declare class YoutubeLiveBroadcastsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
