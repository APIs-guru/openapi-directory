import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveParentsGetPathParams extends SpeakeasyBase {
    fileId: string;
    parentId: string;
}
export declare class DriveParentsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveParentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsGetSecurity extends SpeakeasyBase {
    option1?: DriveParentsGetSecurityOption1;
    option2?: DriveParentsGetSecurityOption2;
    option3?: DriveParentsGetSecurityOption3;
    option4?: DriveParentsGetSecurityOption4;
    option5?: DriveParentsGetSecurityOption5;
    option6?: DriveParentsGetSecurityOption6;
    option7?: DriveParentsGetSecurityOption7;
}
export declare class DriveParentsGetRequest extends SpeakeasyBase {
    pathParams: DriveParentsGetPathParams;
    queryParams: DriveParentsGetQueryParams;
    security: DriveParentsGetSecurity;
}
export declare class DriveParentsGetResponse extends SpeakeasyBase {
    contentType: string;
    parentReference?: shared.ParentReference;
    statusCode: number;
}
