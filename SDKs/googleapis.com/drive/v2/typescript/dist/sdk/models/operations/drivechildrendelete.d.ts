import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChildrenDeletePathParams extends SpeakeasyBase {
    childId: string;
    folderId: string;
}
export declare class DriveChildrenDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveChildrenDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChildrenDeleteSecurity extends SpeakeasyBase {
    option1?: DriveChildrenDeleteSecurityOption1;
    option2?: DriveChildrenDeleteSecurityOption2;
}
export declare class DriveChildrenDeleteRequest extends SpeakeasyBase {
    pathParams: DriveChildrenDeletePathParams;
    queryParams: DriveChildrenDeleteQueryParams;
    security: DriveChildrenDeleteSecurity;
}
export declare class DriveChildrenDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
