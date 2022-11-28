import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceRequest extends SpeakeasyBase {
    pathParams: ServicePathParams;
    security: ServiceSecurity;
}
export declare class ServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
