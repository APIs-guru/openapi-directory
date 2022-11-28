import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsBuildsRetryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsBuildsRetryQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsBuildsRetrySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsBuildsRetryRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsBuildsRetryPathParams;
    queryParams: CloudbuildProjectsLocationsBuildsRetryQueryParams;
    request?: shared.RetryBuildRequest;
    security: CloudbuildProjectsLocationsBuildsRetrySecurity;
}
export declare class CloudbuildProjectsLocationsBuildsRetryResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
