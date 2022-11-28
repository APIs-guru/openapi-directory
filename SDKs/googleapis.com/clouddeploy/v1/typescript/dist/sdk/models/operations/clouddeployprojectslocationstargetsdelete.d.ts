import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsTargetsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class ClouddeployProjectsLocationsTargetsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsDeleteRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsDeletePathParams;
    queryParams: ClouddeployProjectsLocationsTargetsDeleteQueryParams;
    security: ClouddeployProjectsLocationsTargetsDeleteSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
