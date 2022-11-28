import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    pathParams: UpdateServicePathParams;
    request?: shared.Service;
    security: UpdateServiceSecurity;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
