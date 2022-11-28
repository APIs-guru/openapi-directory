import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsBuildsCancelPathParams extends SpeakeasyBase {
    id: string;
    projectId: string;
}
export declare class CloudbuildProjectsBuildsCancelQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsBuildsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsBuildsCancelRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsBuildsCancelPathParams;
    queryParams: CloudbuildProjectsBuildsCancelQueryParams;
    request?: shared.CancelBuildRequest;
    security: CloudbuildProjectsBuildsCancelSecurity;
}
export declare class CloudbuildProjectsBuildsCancelResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    statusCode: number;
}
