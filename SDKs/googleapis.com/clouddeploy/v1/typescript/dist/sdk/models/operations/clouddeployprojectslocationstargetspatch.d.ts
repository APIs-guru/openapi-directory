import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsTargetsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsTargetsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsPatchRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsPatchPathParams;
    queryParams: ClouddeployProjectsLocationsTargetsPatchQueryParams;
    request?: shared.TargetInput;
    security: ClouddeployProjectsLocationsTargetsPatchSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
