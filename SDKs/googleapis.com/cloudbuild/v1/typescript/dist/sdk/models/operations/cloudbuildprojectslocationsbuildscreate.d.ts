import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsBuildsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudbuildProjectsLocationsBuildsCreateQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsBuildsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsBuildsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsBuildsCreatePathParams;
    queryParams: CloudbuildProjectsLocationsBuildsCreateQueryParams;
    request?: shared.BuildInput;
    security: CloudbuildProjectsLocationsBuildsCreateSecurity;
}
export declare class CloudbuildProjectsLocationsBuildsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
