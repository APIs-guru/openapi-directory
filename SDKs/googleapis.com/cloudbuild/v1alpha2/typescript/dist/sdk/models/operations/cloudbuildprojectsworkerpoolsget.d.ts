import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsWorkerPoolsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsWorkerPoolsGetQueryParams extends SpeakeasyBase {
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
}
export declare class CloudbuildProjectsWorkerPoolsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsWorkerPoolsGetRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsWorkerPoolsGetPathParams;
    queryParams: CloudbuildProjectsWorkerPoolsGetQueryParams;
    security: CloudbuildProjectsWorkerPoolsGetSecurity;
}
export declare class CloudbuildProjectsWorkerPoolsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workerPool?: shared.WorkerPool;
}
