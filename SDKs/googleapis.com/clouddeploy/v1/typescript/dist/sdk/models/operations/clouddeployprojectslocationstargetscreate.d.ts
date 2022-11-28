import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsTargetsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    targetId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsTargetsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsCreateRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsCreatePathParams;
    queryParams: ClouddeployProjectsLocationsTargetsCreateQueryParams;
    request?: shared.TargetInput;
    security: ClouddeployProjectsLocationsTargetsCreateSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
