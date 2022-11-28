import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatamigrationProjectsLocationsConnectionProfilesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectionProfileId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesCreateRequest extends SpeakeasyBase {
    pathParams: DatamigrationProjectsLocationsConnectionProfilesCreatePathParams;
    queryParams: DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams;
    request?: shared.ConnectionProfileInput;
    security: DatamigrationProjectsLocationsConnectionProfilesCreateSecurity;
}
export declare class DatamigrationProjectsLocationsConnectionProfilesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
