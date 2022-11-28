import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesInsertPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DrivePropertiesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DrivePropertiesInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesInsertSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesInsertSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesInsertSecurityOption1;
    option2?: DrivePropertiesInsertSecurityOption2;
    option3?: DrivePropertiesInsertSecurityOption3;
    option4?: DrivePropertiesInsertSecurityOption4;
}
export declare class DrivePropertiesInsertRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesInsertPathParams;
    queryParams: DrivePropertiesInsertQueryParams;
    request?: shared.Property;
    security: DrivePropertiesInsertSecurity;
}
export declare class DrivePropertiesInsertResponse extends SpeakeasyBase {
    contentType: string;
    property?: shared.Property;
    statusCode: number;
}
