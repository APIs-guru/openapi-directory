import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesDeletePathParams extends SpeakeasyBase {
    instanceId: string;
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    acceptsIncomplete?: boolean;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    planId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesDeleteRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesDeletePathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesDeleteQueryParams;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesDeleteSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
