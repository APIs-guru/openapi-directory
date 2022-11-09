import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsWorkerPoolsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsWorkerPoolsDeletePathParams;
    queryParams: CloudbuildProjectsLocationsWorkerPoolsDeleteQueryParams;
    security: CloudbuildProjectsLocationsWorkerPoolsDeleteSecurity;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
