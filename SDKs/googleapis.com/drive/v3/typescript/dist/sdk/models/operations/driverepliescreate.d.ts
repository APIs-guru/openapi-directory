import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveRepliesCreatePathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveRepliesCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveRepliesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveRepliesCreateSecurity extends SpeakeasyBase {
    option1?: DriveRepliesCreateSecurityOption1;
    option2?: DriveRepliesCreateSecurityOption2;
}
export declare class DriveRepliesCreateRequest extends SpeakeasyBase {
    pathParams: DriveRepliesCreatePathParams;
    queryParams: DriveRepliesCreateQueryParams;
    request?: shared.Reply;
    security: DriveRepliesCreateSecurity;
}
export declare class DriveRepliesCreateResponse extends SpeakeasyBase {
    contentType: string;
    reply?: shared.Reply;
    statusCode: number;
}
