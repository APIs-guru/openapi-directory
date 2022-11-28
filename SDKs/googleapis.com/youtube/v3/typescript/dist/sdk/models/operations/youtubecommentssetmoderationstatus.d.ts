import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeCommentsSetModerationStatusModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}
export declare class YoutubeCommentsSetModerationStatusQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    banAuthor?: boolean;
    callback?: string;
    fields?: string;
    id: string[];
    key?: string;
    moderationStatus: YoutubeCommentsSetModerationStatusModerationStatusEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCommentsSetModerationStatusSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCommentsSetModerationStatusRequest extends SpeakeasyBase {
    queryParams: YoutubeCommentsSetModerationStatusQueryParams;
    security: YoutubeCommentsSetModerationStatusSecurity;
}
export declare class YoutubeCommentsSetModerationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
