import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams extends SpeakeasyBase {
    instance: string;
}
export declare class MemcacheProjectsLocationsInstancesApplySoftwareUpdateQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsInstancesApplySoftwareUpdatePathParams;
    queryParams: MemcacheProjectsLocationsInstancesApplySoftwareUpdateQueryParams;
    request?: shared.ApplySoftwareUpdateRequest;
    security: MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity;
}
export declare class MemcacheProjectsLocationsInstancesApplySoftwareUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
