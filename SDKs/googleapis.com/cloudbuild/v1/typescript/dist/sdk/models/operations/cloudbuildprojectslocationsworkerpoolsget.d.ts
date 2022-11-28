import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsWorkerPoolsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    triggerId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsGetRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsWorkerPoolsGetPathParams;
    queryParams: CloudbuildProjectsLocationsWorkerPoolsGetQueryParams;
    security: CloudbuildProjectsLocationsWorkerPoolsGetSecurity;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workerPool?: shared.WorkerPool;
}
