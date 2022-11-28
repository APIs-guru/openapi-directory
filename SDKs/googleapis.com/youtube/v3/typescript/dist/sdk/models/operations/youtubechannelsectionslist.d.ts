import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelSectionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    channelId?: string;
    fields?: string;
    hl?: string;
    id?: string[];
    key?: string;
    mine?: boolean;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeChannelSectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsListSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelSectionsListSecurityOption1;
    option2?: YoutubeChannelSectionsListSecurityOption2;
    option3?: YoutubeChannelSectionsListSecurityOption3;
    option4?: YoutubeChannelSectionsListSecurityOption4;
}
export declare class YoutubeChannelSectionsListRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelSectionsListQueryParams;
    security: YoutubeChannelSectionsListSecurity;
}
export declare class YoutubeChannelSectionsListResponse extends SpeakeasyBase {
    channelSectionListResponse?: shared.ChannelSectionListResponse;
    contentType: string;
    statusCode: number;
}
