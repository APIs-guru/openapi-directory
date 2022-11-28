import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesGetPathParams extends SpeakeasyBase {
    fileId: string;
    propertyKey: string;
}
export declare class DrivePropertiesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    visibility?: string;
}
export declare class DrivePropertiesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesGetSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesGetSecurityOption1;
    option2?: DrivePropertiesGetSecurityOption2;
    option3?: DrivePropertiesGetSecurityOption3;
    option4?: DrivePropertiesGetSecurityOption4;
    option5?: DrivePropertiesGetSecurityOption5;
    option6?: DrivePropertiesGetSecurityOption6;
    option7?: DrivePropertiesGetSecurityOption7;
}
export declare class DrivePropertiesGetRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesGetPathParams;
    queryParams: DrivePropertiesGetQueryParams;
    security: DrivePropertiesGetSecurity;
}
export declare class DrivePropertiesGetResponse extends SpeakeasyBase {
    contentType: string;
    property?: shared.Property;
    statusCode: number;
}
