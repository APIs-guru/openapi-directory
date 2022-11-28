import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams extends SpeakeasyBase {
    instanceId: string;
    parent: string;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersV2ServiceInstancesPatchPathParams;
    queryParams: ServicebrokerProjectsBrokersV2ServiceInstancesPatchQueryParams;
    request?: shared.GoogleCloudServicebrokerV1alpha1ServiceInstance;
    security: ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity;
}
export declare class ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
