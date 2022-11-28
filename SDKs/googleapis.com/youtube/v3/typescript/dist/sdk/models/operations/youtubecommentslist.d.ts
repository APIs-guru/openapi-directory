import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeCommentsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified",
    Html = "html",
    PlainText = "plainText"
}
export declare class YoutubeCommentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    parentId?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    textFormat?: YoutubeCommentsListTextFormatEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCommentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentsListRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentsListQueryParams;
    security: YoutubeCommentsListSecurity;
}
export declare class YoutubeCommentsListResponse extends SpeakeasyBase {
    commentListResponse?: shared.CommentListResponse;
    contentType: string;
    statusCode: number;
}
