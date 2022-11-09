import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MemcacheProjectsLocationsInstancesUpdateParametersPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MemcacheProjectsLocationsInstancesUpdateParametersQueryParams extends SpeakeasyBase {
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
export declare class MemcacheProjectsLocationsInstancesUpdateParametersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MemcacheProjectsLocationsInstancesUpdateParametersRequest extends SpeakeasyBase {
    pathParams: MemcacheProjectsLocationsInstancesUpdateParametersPathParams;
    queryParams: MemcacheProjectsLocationsInstancesUpdateParametersQueryParams;
    request?: shared.UpdateParametersRequest;
    security: MemcacheProjectsLocationsInstancesUpdateParametersSecurity;
}
export declare class MemcacheProjectsLocationsInstancesUpdateParametersResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
