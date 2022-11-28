import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsWorkerPoolsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsWorkerPoolsPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsWorkerPoolsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsWorkerPoolsPatchRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsWorkerPoolsPatchPathParams;
    queryParams: CloudbuildProjectsWorkerPoolsPatchQueryParams;
    request?: shared.WorkerPoolInput;
    security: CloudbuildProjectsWorkerPoolsPatchSecurity;
}
export declare class CloudbuildProjectsWorkerPoolsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workerPool?: shared.WorkerPool;
}
