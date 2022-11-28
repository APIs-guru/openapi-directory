import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivePropertiesListPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DrivePropertiesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DrivePropertiesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DrivePropertiesListSecurity extends SpeakeasyBase {
    option1?: DrivePropertiesListSecurityOption1;
    option2?: DrivePropertiesListSecurityOption2;
    option3?: DrivePropertiesListSecurityOption3;
    option4?: DrivePropertiesListSecurityOption4;
    option5?: DrivePropertiesListSecurityOption5;
    option6?: DrivePropertiesListSecurityOption6;
    option7?: DrivePropertiesListSecurityOption7;
}
export declare class DrivePropertiesListRequest extends SpeakeasyBase {
    pathParams: DrivePropertiesListPathParams;
    queryParams: DrivePropertiesListQueryParams;
    security: DrivePropertiesListSecurity;
}
export declare class DrivePropertiesListResponse extends SpeakeasyBase {
    contentType: string;
    propertyList?: shared.PropertyList;
    statusCode: number;
}
