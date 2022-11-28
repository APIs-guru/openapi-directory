import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllServicesSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class AllServicesRequest extends SpeakeasyBase {
    security: AllServicesSecurity;
}
export declare class AllServicesResponse extends SpeakeasyBase {
    contentType: string;
    services?: shared.Service[];
    statusCode: number;
}
