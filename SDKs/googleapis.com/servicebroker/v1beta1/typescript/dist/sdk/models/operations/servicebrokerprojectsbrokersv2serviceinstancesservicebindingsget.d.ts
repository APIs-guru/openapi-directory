import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
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
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetPathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetQueryParams;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
