import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsTargetsGetQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsTargetsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsGetRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsGetPathParams;
    queryParams: ClouddeployProjectsLocationsTargetsGetQueryParams;
    security: ClouddeployProjectsLocationsTargetsGetSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    target?: shared.Target;
}
