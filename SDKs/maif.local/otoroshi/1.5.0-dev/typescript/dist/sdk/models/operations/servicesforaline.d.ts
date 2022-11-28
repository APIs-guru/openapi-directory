import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicesForALinePathParams extends SpeakeasyBase {
    line: string;
}
export declare class ServicesForALineSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServicesForALineRequest extends SpeakeasyBase {
    pathParams: ServicesForALinePathParams;
    security: ServicesForALineSecurity;
}
export declare class ServicesForALineResponse extends SpeakeasyBase {
    contentType: string;
    services?: shared.Service[];
    statusCode: number;
}
