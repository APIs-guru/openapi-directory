import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlusCommentsListPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare enum PlusCommentsListSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class PlusCommentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortOrder?: PlusCommentsListSortOrderEnum;
    userIp?: string;
}
export declare class PlusCommentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusCommentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlusCommentsListSecurity extends SpeakeasyBase {
    option1?: PlusCommentsListSecurityOption1;
    option2?: PlusCommentsListSecurityOption2;
}
export declare class PlusCommentsListRequest extends SpeakeasyBase {
    pathParams: PlusCommentsListPathParams;
    queryParams: PlusCommentsListQueryParams;
    security: PlusCommentsListSecurity;
}
export declare class PlusCommentsListResponse extends SpeakeasyBase {
    commentFeed?: shared.CommentFeed;
    contentType: string;
    statusCode: number;
}
