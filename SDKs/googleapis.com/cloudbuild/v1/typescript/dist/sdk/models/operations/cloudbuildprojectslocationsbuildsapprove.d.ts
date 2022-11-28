import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsBuildsApprovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsBuildsApproveQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsLocationsBuildsApproveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsLocationsBuildsApproveRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsBuildsApprovePathParams;
    queryParams: CloudbuildProjectsLocationsBuildsApproveQueryParams;
    request?: shared.ApproveBuildRequestInput;
    security: CloudbuildProjectsLocationsBuildsApproveSecurity;
}
export declare class CloudbuildProjectsLocationsBuildsApproveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
