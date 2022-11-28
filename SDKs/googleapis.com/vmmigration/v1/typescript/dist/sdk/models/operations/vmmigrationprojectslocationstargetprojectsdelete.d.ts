import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsTargetProjectsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsTargetProjectsDeleteRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsTargetProjectsDeletePathParams;
    queryParams: VmmigrationProjectsLocationsTargetProjectsDeleteQueryParams;
    security: VmmigrationProjectsLocationsTargetProjectsDeleteSecurity;
}
export declare class VmmigrationProjectsLocationsTargetProjectsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
