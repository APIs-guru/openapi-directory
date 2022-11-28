import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesPatchPathParams extends SpeakeasyBase {
    fileId: string;
    propertyKey: string;
}
export declare class DrivePropertiesPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    visibility?: string;
}
export declare class DrivePropertiesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesPatchSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesPatchSecurityOption1;
    option2?: DrivePropertiesPatchSecurityOption2;
    option3?: DrivePropertiesPatchSecurityOption3;
    option4?: DrivePropertiesPatchSecurityOption4;
}
export declare class DrivePropertiesPatchRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesPatchPathParams;
    queryParams: DrivePropertiesPatchQueryParams;
    request?: shared.Property;
    security: DrivePropertiesPatchSecurity;
}
export declare class DrivePropertiesPatchResponse extends SpeakeasyBase {
    contentType: string;
    property?: shared.Property;
    statusCode: number;
}
