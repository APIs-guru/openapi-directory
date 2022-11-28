import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsPatchPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveCommentsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsPatchSecurity extends SpeakeasyBase {
    option1?: DriveCommentsPatchSecurityOption1;
    option2?: DriveCommentsPatchSecurityOption2;
}
export declare class DriveCommentsPatchRequest extends SpeakeasyBase {
    pathParams: DriveCommentsPatchPathParams;
    queryParams: DriveCommentsPatchQueryParams;
    request?: shared.Comment;
    security: DriveCommentsPatchSecurity;
}
export declare class DriveCommentsPatchResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
