import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesInsertPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveRepliesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesInsertSecurity extends SpeakeasyBase {
    option1?: DriveRepliesInsertSecurityOption1;
    option2?: DriveRepliesInsertSecurityOption2;
}
export declare class DriveRepliesInsertRequest extends SpeakeasyBase {
    pathParams: DriveRepliesInsertPathParams;
    queryParams: DriveRepliesInsertQueryParams;
    request?: shared.CommentReply;
    security: DriveRepliesInsertSecurity;
}
export declare class DriveRepliesInsertResponse extends SpeakeasyBase {
    commentReply?: shared.CommentReply;
    contentType: string;
    statusCode: number;
}
