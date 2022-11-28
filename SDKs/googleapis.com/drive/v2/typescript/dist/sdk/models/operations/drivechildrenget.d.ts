import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChildrenGetPathParams extends SpeakeasyBase {
    childId: string;
    folderId: string;
}
export declare class DriveChildrenGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveChildrenGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenGetSecurity extends SpeakeasyBase {
    option1?: DriveChildrenGetSecurityOption1;
    option2?: DriveChildrenGetSecurityOption2;
    option3?: DriveChildrenGetSecurityOption3;
    option4?: DriveChildrenGetSecurityOption4;
    option5?: DriveChildrenGetSecurityOption5;
    option6?: DriveChildrenGetSecurityOption6;
    option7?: DriveChildrenGetSecurityOption7;
}
export declare class DriveChildrenGetRequest extends SpeakeasyBase {
    pathParams: DriveChildrenGetPathParams;
    queryParams: DriveChildrenGetQueryParams;
    security: DriveChildrenGetSecurity;
}
export declare class DriveChildrenGetResponse extends SpeakeasyBase {
    childReference?: shared.ChildReference;
    contentType: string;
    statusCode: number;
}
