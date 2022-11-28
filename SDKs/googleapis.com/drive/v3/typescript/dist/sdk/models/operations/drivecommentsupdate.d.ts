import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsUpdatePathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveCommentsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsUpdateSecurity extends SpeakeasyBase {
    option1?: DriveCommentsUpdateSecurityOption1;
    option2?: DriveCommentsUpdateSecurityOption2;
}
export declare class DriveCommentsUpdateRequest extends SpeakeasyBase {
    pathParams: DriveCommentsUpdatePathParams;
    queryParams: DriveCommentsUpdateQueryParams;
    request?: shared.Comment;
    security: DriveCommentsUpdateSecurity;
}
export declare class DriveCommentsUpdateResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
