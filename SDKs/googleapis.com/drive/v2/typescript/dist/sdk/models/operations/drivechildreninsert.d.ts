import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChildrenInsertPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class DriveChildrenInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    userIp?: string;
}
export declare class DriveChildrenInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenInsertSecurity extends SpeakeasyBase {
    option1?: DriveChildrenInsertSecurityOption1;
    option2?: DriveChildrenInsertSecurityOption2;
    option3?: DriveChildrenInsertSecurityOption3;
}
export declare class DriveChildrenInsertRequest extends SpeakeasyBase {
    pathParams: DriveChildrenInsertPathParams;
    queryParams: DriveChildrenInsertQueryParams;
    request?: shared.ChildReference;
    security: DriveChildrenInsertSecurity;
}
export declare class DriveChildrenInsertResponse extends SpeakeasyBase {
    childReference?: shared.ChildReference;
    contentType: string;
    statusCode: number;
}
