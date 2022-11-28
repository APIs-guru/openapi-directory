import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveCommentsListPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveCommentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    includeDeleted?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startModifiedTime?: string;
    userIp?: string;
}
export declare class DriveCommentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveCommentsListSecurity extends SpeakeasyBase {
    option1?: DriveCommentsListSecurityOption1;
    option2?: DriveCommentsListSecurityOption2;
    option3?: DriveCommentsListSecurityOption3;
}
export declare class DriveCommentsListRequest extends SpeakeasyBase {
    pathParams: DriveCommentsListPathParams;
    queryParams: DriveCommentsListQueryParams;
    security: DriveCommentsListSecurity;
}
export declare class DriveCommentsListResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    statusCode: number;
}
