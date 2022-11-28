import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCommentsMarkAsSpamQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCommentsMarkAsSpamSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentsMarkAsSpamRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentsMarkAsSpamQueryParams;
    security: YoutubeCommentsMarkAsSpamSecurity;
}
export declare class YoutubeCommentsMarkAsSpamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
