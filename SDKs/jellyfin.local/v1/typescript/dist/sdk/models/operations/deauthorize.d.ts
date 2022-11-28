import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeauthorizeSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeauthorizeRequest extends SpeakeasyBase {
    security: DeauthorizeSecurity;
}
export declare class DeauthorizeResponse extends SpeakeasyBase {
    contentType: string;
    deauthorize200ApplicationJsonInt32Integer?: number;
    statusCode: number;
}
