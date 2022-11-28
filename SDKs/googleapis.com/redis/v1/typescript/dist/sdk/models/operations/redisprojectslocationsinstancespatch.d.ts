import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RedisProjectsLocationsInstancesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RedisProjectsLocationsInstancesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesPatchRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesPatchPathParams;
    queryParams: RedisProjectsLocationsInstancesPatchQueryParams;
    request?: shared.InstanceInput;
    security: RedisProjectsLocationsInstancesPatchSecurity;
}
export declare class RedisProjectsLocationsInstancesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
