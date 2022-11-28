import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsWorkerPoolsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsPatchRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsWorkerPoolsPatchPathParams;
    queryParams: CloudbuildProjectsLocationsWorkerPoolsPatchQueryParams;
    request?: shared.WorkerPoolInput;
    security: CloudbuildProjectsLocationsWorkerPoolsPatchSecurity;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
