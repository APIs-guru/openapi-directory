import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCommentsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCommentsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentsUpdateQueryParams;
    request?: shared.Comment;
    security: YoutubeCommentsUpdateSecurity;
}
export declare class YoutubeCommentsUpdateResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
