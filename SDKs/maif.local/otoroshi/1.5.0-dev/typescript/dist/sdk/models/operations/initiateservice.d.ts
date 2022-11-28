import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class InitiateServiceRequest extends SpeakeasyBase {
    security: InitiateServiceSecurity;
}
export declare class InitiateServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
