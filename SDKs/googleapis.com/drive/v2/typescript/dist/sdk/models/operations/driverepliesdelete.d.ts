import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesDeletePathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
    replyId: string;
}
export declare class DriveRepliesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesDeleteSecurity extends SpeakeasyBase {
    option1?: DriveRepliesDeleteSecurityOption1;
    option2?: DriveRepliesDeleteSecurityOption2;
}
export declare class DriveRepliesDeleteRequest extends SpeakeasyBase {
    pathParams: DriveRepliesDeletePathParams;
    queryParams: DriveRepliesDeleteQueryParams;
    security: DriveRepliesDeleteSecurity;
}
export declare class DriveRepliesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
