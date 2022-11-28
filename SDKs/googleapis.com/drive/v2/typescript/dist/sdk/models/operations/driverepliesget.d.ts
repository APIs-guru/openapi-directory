import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesGetPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
    replyId: string;
}
export declare class DriveRepliesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesGetSecurity extends SpeakeasyBase {
    option1?: DriveRepliesGetSecurityOption1;
    option2?: DriveRepliesGetSecurityOption2;
    option3?: DriveRepliesGetSecurityOption3;
}
export declare class DriveRepliesGetRequest extends SpeakeasyBase {
    pathParams: DriveRepliesGetPathParams;
    queryParams: DriveRepliesGetQueryParams;
    security: DriveRepliesGetSecurity;
}
export declare class DriveRepliesGetResponse extends SpeakeasyBase {
    commentReply?: shared.CommentReply;
    contentType: string;
    statusCode: number;
}
