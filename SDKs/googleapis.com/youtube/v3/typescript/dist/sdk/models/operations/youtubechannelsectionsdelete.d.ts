import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeChannelSectionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeChannelSectionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeChannelSectionsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeChannelSectionsDeleteSecurityOption1;
    option2?: YoutubeChannelSectionsDeleteSecurityOption2;
    option3?: YoutubeChannelSectionsDeleteSecurityOption3;
}
export declare class YoutubeChannelSectionsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeChannelSectionsDeleteQueryParams;
    security: YoutubeChannelSectionsDeleteSecurity;
}
export declare class YoutubeChannelSectionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
