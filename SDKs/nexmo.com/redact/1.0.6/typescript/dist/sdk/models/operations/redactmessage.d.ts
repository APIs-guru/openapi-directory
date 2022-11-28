import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RedactMessageSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RedactMessageRequest extends SpeakeasyBase {
    request: shared.RedactTransaction;
    security: RedactMessageSecurity;
}
export declare class RedactMessageResponse extends SpeakeasyBase {
    contentType: string;
    errorInvalidId?: shared.ErrorInvalidId;
    errorThrottled?: shared.ErrorThrottled;
    errorUnauthorized?: shared.ErrorUnauthorized;
    statusCode: number;
    redactMessage403ApplicationJsonOneOf?: any;
    redactMessage422ApplicationJsonOneOf?: any;
}
