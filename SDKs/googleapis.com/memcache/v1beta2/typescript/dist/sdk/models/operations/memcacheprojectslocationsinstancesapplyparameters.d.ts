import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsInstancesApplyParametersPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MemcacheProjectsLocationsInstancesApplyParametersQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsInstancesApplyParametersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsInstancesApplyParametersRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsInstancesApplyParametersPathParams;
    queryParams: MemcacheProjectsLocationsInstancesApplyParametersQueryParams;
    request?: shared.ApplyParametersRequest;
    security: MemcacheProjectsLocationsInstancesApplyParametersSecurity;
}
export declare class MemcacheProjectsLocationsInstancesApplyParametersResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
