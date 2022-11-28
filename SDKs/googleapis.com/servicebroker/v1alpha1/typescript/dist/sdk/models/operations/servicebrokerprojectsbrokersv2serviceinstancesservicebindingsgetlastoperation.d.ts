import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams extends SpeakeasyBase {
    bindingId: string;
    instanceId: string;
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationPathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationQueryParams;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
