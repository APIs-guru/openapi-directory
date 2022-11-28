import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsLocationsListSecurityOption1;
    option2?: BigtableadminProjectsLocationsListSecurityOption2;
    option3?: BigtableadminProjectsLocationsListSecurityOption3;
    option4?: BigtableadminProjectsLocationsListSecurityOption4;
    option5?: BigtableadminProjectsLocationsListSecurityOption5;
    option6?: BigtableadminProjectsLocationsListSecurityOption6;
    option7?: BigtableadminProjectsLocationsListSecurityOption7;
}
export declare class BigtableadminProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsLocationsListPathParams;
    queryParams: BigtableadminProjectsLocationsListQueryParams;
    security: BigtableadminProjectsLocationsListSecurity;
}
export declare class BigtableadminProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
