import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsBuildsRetryPathParams extends SpeakeasyBase {
    id: string;
    projectId: string;
}
export declare class CloudbuildProjectsBuildsRetryQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsBuildsRetrySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsBuildsRetryRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsBuildsRetryPathParams;
    queryParams: CloudbuildProjectsBuildsRetryQueryParams;
    request?: shared.RetryBuildRequest;
    security: CloudbuildProjectsBuildsRetrySecurity;
}
export declare class CloudbuildProjectsBuildsRetryResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
