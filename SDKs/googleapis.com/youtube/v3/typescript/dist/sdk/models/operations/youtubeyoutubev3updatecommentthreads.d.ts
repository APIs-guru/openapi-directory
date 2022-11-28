import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeYoutubeV3UpdateCommentThreadsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeYoutubeV3UpdateCommentThreadsRequest extends SpeakeasyBase {
    queryParams: YoutubeYoutubeV3UpdateCommentThreadsQueryParams;
    request?: shared.CommentThread;
}
export declare class YoutubeYoutubeV3UpdateCommentThreadsResponse extends SpeakeasyBase {
    commentThread?: shared.CommentThread;
    contentType: string;
    statusCode: number;
}
