import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeletePathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteQueryParams;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
