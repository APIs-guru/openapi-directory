import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveParentsDeletePathParams extends SpeakeasyBase {
    fileId: string;
    parentId: string;
}
export declare class DriveParentsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveParentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsDeleteSecurity extends SpeakeasyBase {
    option1?: DriveParentsDeleteSecurityOption1;
    option2?: DriveParentsDeleteSecurityOption2;
}
export declare class DriveParentsDeleteRequest extends SpeakeasyBase {
    pathParams: DriveParentsDeletePathParams;
    queryParams: DriveParentsDeleteQueryParams;
    security: DriveParentsDeleteSecurity;
}
export declare class DriveParentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
