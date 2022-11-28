import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeChannelsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelsUpdateSecurityOption1;
    option2?: YoutubeChannelsUpdateSecurityOption2;
    option3?: YoutubeChannelsUpdateSecurityOption3;
}
export declare class YoutubeChannelsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelsUpdateQueryParams;
    request?: shared.Channel;
    security: YoutubeChannelsUpdateSecurity;
}
export declare class YoutubeChannelsUpdateResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
