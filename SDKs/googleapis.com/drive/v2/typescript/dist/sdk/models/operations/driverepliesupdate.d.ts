import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesUpdatePathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
    replyId: string;
}
export declare class DriveRepliesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesUpdateSecurity extends SpeakeasyBase {
    option1?: DriveRepliesUpdateSecurityOption1;
    option2?: DriveRepliesUpdateSecurityOption2;
}
export declare class DriveRepliesUpdateRequest extends SpeakeasyBase {
    pathParams: DriveRepliesUpdatePathParams;
    queryParams: DriveRepliesUpdateQueryParams;
    request?: shared.CommentReply;
    security: DriveRepliesUpdateSecurity;
}
export declare class DriveRepliesUpdateResponse extends SpeakeasyBase {
    commentReply?: shared.CommentReply;
    contentType: string;
    statusCode: number;
}
