import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VerifyRequestPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class VerifyRequestRequest extends SpeakeasyBase {
    pathParams: VerifyRequestPathParams;
    request: shared.VerifyRequest;
}
export declare class VerifyRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    verifyRequest200ApplicationJsonOneOf?: any;
}
