import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesListPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveRepliesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesListSecurity extends SpeakeasyBase {
    option1?: DriveRepliesListSecurityOption1;
    option2?: DriveRepliesListSecurityOption2;
    option3?: DriveRepliesListSecurityOption3;
}
export declare class DriveRepliesListRequest extends SpeakeasyBase {
    pathParams: DriveRepliesListPathParams;
    queryParams: DriveRepliesListQueryParams;
    security: DriveRepliesListSecurity;
}
export declare class DriveRepliesListResponse extends SpeakeasyBase {
    contentType: string;
    replyList?: shared.ReplyList;
    statusCode: number;
}
