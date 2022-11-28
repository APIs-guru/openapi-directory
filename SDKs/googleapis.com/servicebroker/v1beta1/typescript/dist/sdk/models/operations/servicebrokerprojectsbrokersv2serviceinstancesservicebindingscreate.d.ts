import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams extends SpeakeasyBase {
    bindingId: string;
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    acceptsIncomplete?: boolean;
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
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreatePathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams;
    request?: shared.GoogleCloudServicebrokerV1beta1Binding;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
