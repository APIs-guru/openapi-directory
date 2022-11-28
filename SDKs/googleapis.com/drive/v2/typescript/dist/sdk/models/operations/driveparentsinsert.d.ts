import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveParentsInsertPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveParentsInsertQueryParams extends SpeakeasyBase {
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
export declare class DriveParentsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsInsertSecurity extends SpeakeasyBase {
    option1?: DriveParentsInsertSecurityOption1;
    option2?: DriveParentsInsertSecurityOption2;
    option3?: DriveParentsInsertSecurityOption3;
}
export declare class DriveParentsInsertRequest extends SpeakeasyBase {
    pathParams: DriveParentsInsertPathParams;
    queryParams: DriveParentsInsertQueryParams;
    request?: shared.ParentReference;
    security: DriveParentsInsertSecurity;
}
export declare class DriveParentsInsertResponse extends SpeakeasyBase {
    contentType: string;
    parentReference?: shared.ParentReference;
    statusCode: number;
}
