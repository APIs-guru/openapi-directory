import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttributeSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetAttributeRequest extends SpeakeasyBase {
    security: GetAttributeSecurity;
}
export declare class GetAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
