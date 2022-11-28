import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsGroupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsGroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsGroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsGroupsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsGroupsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsGroupsCreateQueryParams;
    request?: shared.GroupInput;
    security: VmmigrationProjectsLocationsGroupsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
