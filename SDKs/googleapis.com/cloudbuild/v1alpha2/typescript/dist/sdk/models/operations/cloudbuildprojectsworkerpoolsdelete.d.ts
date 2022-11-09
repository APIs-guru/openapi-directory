import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsWorkerPoolsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsWorkerPoolsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsWorkerPoolsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsWorkerPoolsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsWorkerPoolsDeletePathParams;
    queryParams: CloudbuildProjectsWorkerPoolsDeleteQueryParams;
    security: CloudbuildProjectsWorkerPoolsDeleteSecurity;
}
export declare class CloudbuildProjectsWorkerPoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
