import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesUpdatePathParams extends SpeakeasyBase {
    fileId: string;
    propertyKey: string;
}
export declare class DrivePropertiesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    visibility?: string;
}
export declare class DrivePropertiesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesUpdateSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesUpdateSecurityOption1;
    option2?: DrivePropertiesUpdateSecurityOption2;
    option3?: DrivePropertiesUpdateSecurityOption3;
    option4?: DrivePropertiesUpdateSecurityOption4;
}
export declare class DrivePropertiesUpdateRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesUpdatePathParams;
    queryParams: DrivePropertiesUpdateQueryParams;
    request?: shared.Property;
    security: DrivePropertiesUpdateSecurity;
}
export declare class DrivePropertiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    property?: shared.Property;
    statusCode: number;
}
