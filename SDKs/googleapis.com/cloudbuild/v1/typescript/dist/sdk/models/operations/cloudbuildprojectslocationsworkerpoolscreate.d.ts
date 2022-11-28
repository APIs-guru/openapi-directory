import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsWorkerPoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
    workerPoolId?: string;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsWorkerPoolsCreatePathParams;
    queryParams: CloudbuildProjectsLocationsWorkerPoolsCreateQueryParams;
    request?: shared.WorkerPoolInput;
    security: CloudbuildProjectsLocationsWorkerPoolsCreateSecurity;
}
export declare class CloudbuildProjectsLocationsWorkerPoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
