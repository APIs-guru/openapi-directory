import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesAppProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesAppProfilesListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesAppProfilesListSecurityOption1;
    option2?: BigtableadminProjectsInstancesAppProfilesListSecurityOption2;
    option3?: BigtableadminProjectsInstancesAppProfilesListSecurityOption3;
    option4?: BigtableadminProjectsInstancesAppProfilesListSecurityOption4;
    option5?: BigtableadminProjectsInstancesAppProfilesListSecurityOption5;
    option6?: BigtableadminProjectsInstancesAppProfilesListSecurityOption6;
}
export declare class BigtableadminProjectsInstancesAppProfilesListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesAppProfilesListPathParams;
    queryParams: BigtableadminProjectsInstancesAppProfilesListQueryParams;
    security: BigtableadminProjectsInstancesAppProfilesListSecurity;
}
export declare class BigtableadminProjectsInstancesAppProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    listAppProfilesResponse?: shared.ListAppProfilesResponse;
    statusCode: number;
}
