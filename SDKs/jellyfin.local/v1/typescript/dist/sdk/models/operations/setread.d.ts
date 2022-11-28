import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetReadPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SetReadSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetReadRequest extends SpeakeasyBase {
    pathParams: SetReadPathParams;
    security: SetReadSecurity;
}
export declare class SetReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
