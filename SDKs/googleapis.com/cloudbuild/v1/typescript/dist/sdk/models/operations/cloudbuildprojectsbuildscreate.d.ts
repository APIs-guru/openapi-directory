import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsBuildsCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudbuildProjectsBuildsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsBuildsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsBuildsCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsBuildsCreatePathParams;
    queryParams: CloudbuildProjectsBuildsCreateQueryParams;
    request?: shared.BuildInput;
    security: CloudbuildProjectsBuildsCreateSecurity;
}
export declare class CloudbuildProjectsBuildsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
