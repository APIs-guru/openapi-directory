import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesPatchPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
    replyId: string;
}
export declare class DriveRepliesPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesPatchSecurity extends SpeakeasyBase {
    option1?: DriveRepliesPatchSecurityOption1;
    option2?: DriveRepliesPatchSecurityOption2;
}
export declare class DriveRepliesPatchRequest extends SpeakeasyBase {
    pathParams: DriveRepliesPatchPathParams;
    queryParams: DriveRepliesPatchQueryParams;
    request?: shared.CommentReply;
    security: DriveRepliesPatchSecurity;
}
export declare class DriveRepliesPatchResponse extends SpeakeasyBase {
    commentReply?: shared.CommentReply;
    contentType: string;
    statusCode: number;
}
