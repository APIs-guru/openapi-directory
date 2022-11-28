import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelSectionsUpdateQueryParams extends SpeakeasyBase {
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
export declare class YoutubeChannelSectionsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelSectionsUpdateSecurityOption1;
    option2?: YoutubeChannelSectionsUpdateSecurityOption2;
    option3?: YoutubeChannelSectionsUpdateSecurityOption3;
}
export declare class YoutubeChannelSectionsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelSectionsUpdateQueryParams;
    request?: shared.ChannelSection;
    security: YoutubeChannelSectionsUpdateSecurity;
}
export declare class YoutubeChannelSectionsUpdateResponse extends SpeakeasyBase {
    channelSection?: shared.ChannelSection;
    contentType: string;
    statusCode: number;
}
