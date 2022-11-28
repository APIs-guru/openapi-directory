import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveParentsListPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveParentsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveParentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveParentsListSecurity extends SpeakeasyBase {
    option1?: DriveParentsListSecurityOption1;
    option2?: DriveParentsListSecurityOption2;
    option3?: DriveParentsListSecurityOption3;
    option4?: DriveParentsListSecurityOption4;
    option5?: DriveParentsListSecurityOption5;
    option6?: DriveParentsListSecurityOption6;
    option7?: DriveParentsListSecurityOption7;
}
export declare class DriveParentsListRequest extends SpeakeasyBase {
    pathParams: DriveParentsListPathParams;
    queryParams: DriveParentsListQueryParams;
    security: DriveParentsListSecurity;
}
export declare class DriveParentsListResponse extends SpeakeasyBase {
    contentType: string;
    parentList?: shared.ParentList;
    statusCode: number;
}
