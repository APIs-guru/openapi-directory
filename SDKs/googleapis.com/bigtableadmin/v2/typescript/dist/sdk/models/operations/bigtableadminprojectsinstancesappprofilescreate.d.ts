import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesAppProfilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appProfileId?: string;
    callback?: string;
    fields?: string;
    ignoreWarnings?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption1;
    option2?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption2;
    option3?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption3;
    option4?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption4;
    option5?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption5;
    option6?: BigtableadminProjectsInstancesAppProfilesCreateSecurityOption6;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesAppProfilesCreatePathParams;
    queryParams: BigtableadminProjectsInstancesAppProfilesCreateQueryParams;
    request?: shared.AppProfile;
    security: BigtableadminProjectsInstancesAppProfilesCreateSecurity;
}
export declare class BigtableadminProjectsInstancesAppProfilesCreateResponse extends SpeakeasyBase {
    appProfile?: shared.AppProfile;
    contentType: string;
    statusCode: number;
}
