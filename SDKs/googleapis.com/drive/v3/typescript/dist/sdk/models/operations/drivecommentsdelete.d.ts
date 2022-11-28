import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsDeletePathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveCommentsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsDeleteSecurity extends SpeakeasyBase {
    option1?: DriveCommentsDeleteSecurityOption1;
    option2?: DriveCommentsDeleteSecurityOption2;
}
export declare class DriveCommentsDeleteRequest extends SpeakeasyBase {
    pathParams: DriveCommentsDeletePathParams;
    queryParams: DriveCommentsDeleteQueryParams;
    security: DriveCommentsDeleteSecurity;
}
export declare class DriveCommentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
