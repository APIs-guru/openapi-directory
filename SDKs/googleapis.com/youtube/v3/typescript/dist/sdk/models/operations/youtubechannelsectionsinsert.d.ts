import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelSectionsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeChannelSectionsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelSectionsInsertSecurityOption1;
    option2?: YoutubeChannelSectionsInsertSecurityOption2;
    option3?: YoutubeChannelSectionsInsertSecurityOption3;
}
export declare class YoutubeChannelSectionsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelSectionsInsertQueryParams;
    request?: shared.ChannelSection;
    security: YoutubeChannelSectionsInsertSecurity;
}
export declare class YoutubeChannelSectionsInsertResponse extends SpeakeasyBase {
    channelSection?: shared.ChannelSection;
    contentType: string;
    statusCode: number;
}
