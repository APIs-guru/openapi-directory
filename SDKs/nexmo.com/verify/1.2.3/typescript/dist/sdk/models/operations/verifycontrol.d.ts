import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VerifyControlPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class VerifyControlRequest extends SpeakeasyBase {
    pathParams: VerifyControlPathParams;
    request: shared.ControlRequest;
}
export declare class VerifyControlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    verifyControl200ApplicationJsonOneOf?: any;
}
