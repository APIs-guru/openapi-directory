import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    request?: shared.Service;
    security: CreateServiceSecurity;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
