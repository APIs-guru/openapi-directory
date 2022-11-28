import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChildrenListPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class DriveChildrenListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    q?: string;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveChildrenListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenListSecurity extends SpeakeasyBase {
    option1?: DriveChildrenListSecurityOption1;
    option2?: DriveChildrenListSecurityOption2;
    option3?: DriveChildrenListSecurityOption3;
    option4?: DriveChildrenListSecurityOption4;
    option5?: DriveChildrenListSecurityOption5;
    option6?: DriveChildrenListSecurityOption6;
    option7?: DriveChildrenListSecurityOption7;
}
export declare class DriveChildrenListRequest extends SpeakeasyBase {
    pathParams: DriveChildrenListPathParams;
    queryParams: DriveChildrenListQueryParams;
    security: DriveChildrenListSecurity;
}
export declare class DriveChildrenListResponse extends SpeakeasyBase {
    childList?: shared.ChildList;
    contentType: string;
    statusCode: number;
}
