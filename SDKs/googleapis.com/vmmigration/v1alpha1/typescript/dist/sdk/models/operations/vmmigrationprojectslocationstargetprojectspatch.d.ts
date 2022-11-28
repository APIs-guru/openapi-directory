import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsTargetProjectsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VmmigrationProjectsLocationsTargetProjectsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsTargetProjectsPatchRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsTargetProjectsPatchPathParams;
    queryParams: VmmigrationProjectsLocationsTargetProjectsPatchQueryParams;
    request?: shared.TargetProjectInput;
    security: VmmigrationProjectsLocationsTargetProjectsPatchSecurity;
}
export declare class VmmigrationProjectsLocationsTargetProjectsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
