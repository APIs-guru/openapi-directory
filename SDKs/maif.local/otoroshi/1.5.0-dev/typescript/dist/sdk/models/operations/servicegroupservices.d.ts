import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceGroupServicesPathParams extends SpeakeasyBase {
    serviceGroupId: string;
}
export declare class ServiceGroupServicesSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceGroupServicesRequest extends SpeakeasyBase {
    pathParams: ServiceGroupServicesPathParams;
    security: ServiceGroupServicesSecurity;
}
export declare class ServiceGroupServicesResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
}
