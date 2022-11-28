import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsTargetProjectsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    targetProjectId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsTargetProjectsCreateRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsTargetProjectsCreatePathParams;
    queryParams: VmmigrationProjectsLocationsTargetProjectsCreateQueryParams;
    request?: shared.TargetProjectInput;
    security: VmmigrationProjectsLocationsTargetProjectsCreateSecurity;
}
export declare class VmmigrationProjectsLocationsTargetProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
