import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShutdownApplicationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ShutdownApplicationRequest extends SpeakeasyBase {
    security: ShutdownApplicationSecurity;
}
export declare class ShutdownApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
