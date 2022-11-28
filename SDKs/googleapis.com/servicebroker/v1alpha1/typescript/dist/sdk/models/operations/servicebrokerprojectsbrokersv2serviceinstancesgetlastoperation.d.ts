import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationPathParams extends SpeakeasyBase {
    instanceId: string;
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    operation?: string;
    planId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationPathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationQueryParams;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
