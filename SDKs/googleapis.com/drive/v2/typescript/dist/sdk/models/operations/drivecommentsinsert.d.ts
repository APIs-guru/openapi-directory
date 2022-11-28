import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsInsertPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveCommentsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsInsertSecurity extends SpeakeasyBase {
    option1?: DriveCommentsInsertSecurityOption1;
    option2?: DriveCommentsInsertSecurityOption2;
}
export declare class DriveCommentsInsertRequest extends SpeakeasyBase {
    pathParams: DriveCommentsInsertPathParams;
    queryParams: DriveCommentsInsertQueryParams;
    request?: shared.Comment;
    security: DriveCommentsInsertSecurity;
}
export declare class DriveCommentsInsertResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
