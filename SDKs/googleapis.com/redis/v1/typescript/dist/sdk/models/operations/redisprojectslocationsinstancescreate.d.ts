import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedisProjectsLocationsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RedisProjectsLocationsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    instanceId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RedisProjectsLocationsInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RedisProjectsLocationsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: RedisProjectsLocationsInstancesCreatePathParams;
    queryParams: RedisProjectsLocationsInstancesCreateQueryParams;
    request?: shared.InstanceInput;
    security: RedisProjectsLocationsInstancesCreateSecurity;
}
export declare class RedisProjectsLocationsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
