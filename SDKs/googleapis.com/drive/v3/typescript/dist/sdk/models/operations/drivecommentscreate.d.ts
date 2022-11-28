import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsCreatePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveCommentsCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsCreateSecurity extends SpeakeasyBase {
    option1?: DriveCommentsCreateSecurityOption1;
    option2?: DriveCommentsCreateSecurityOption2;
}
export declare class DriveCommentsCreateRequest extends SpeakeasyBase {
    pathParams: DriveCommentsCreatePathParams;
    queryParams: DriveCommentsCreateQueryParams;
    request?: shared.Comment;
    security: DriveCommentsCreateSecurity;
}
export declare class DriveCommentsCreateResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
