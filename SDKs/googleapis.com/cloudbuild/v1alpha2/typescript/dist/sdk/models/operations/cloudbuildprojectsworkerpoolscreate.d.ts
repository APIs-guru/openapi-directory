import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsWorkerPoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsWorkerPoolsCreateQueryParams extends SpeakeasyBase {
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
    workerPoolId?: string;
}
export declare class CloudbuildProjectsWorkerPoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsWorkerPoolsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsWorkerPoolsCreatePathParams;
    queryParams: CloudbuildProjectsWorkerPoolsCreateQueryParams;
    request?: shared.WorkerPool;
    security: CloudbuildProjectsWorkerPoolsCreateSecurity;
}
export declare class CloudbuildProjectsWorkerPoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workerPool?: shared.WorkerPool;
}
