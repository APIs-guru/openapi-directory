import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesDeletePathParams extends SpeakeasyBase {
    fileId: string;
    propertyKey: string;
}
export declare class DrivePropertiesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    visibility?: string;
}
export declare class DrivePropertiesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesDeleteSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesDeleteSecurityOption1;
    option2?: DrivePropertiesDeleteSecurityOption2;
    option3?: DrivePropertiesDeleteSecurityOption3;
    option4?: DrivePropertiesDeleteSecurityOption4;
}
export declare class DrivePropertiesDeleteRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesDeletePathParams;
    queryParams: DrivePropertiesDeleteQueryParams;
    security: DrivePropertiesDeleteSecurity;
}
export declare class DrivePropertiesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
