import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsGetPathParams extends SpeakeasyBase {
    commentId: string;
    fileId: string;
}
export declare class DriveCommentsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveCommentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsGetSecurity extends SpeakeasyBase {
    option1?: DriveCommentsGetSecurityOption1;
    option2?: DriveCommentsGetSecurityOption2;
    option3?: DriveCommentsGetSecurityOption3;
}
export declare class DriveCommentsGetRequest extends SpeakeasyBase {
    pathParams: DriveCommentsGetPathParams;
    queryParams: DriveCommentsGetQueryParams;
    security: DriveCommentsGetSecurity;
}
export declare class DriveCommentsGetResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    statusCode: number;
}
