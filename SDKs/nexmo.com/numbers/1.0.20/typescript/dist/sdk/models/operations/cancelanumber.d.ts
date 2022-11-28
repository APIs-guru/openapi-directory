import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelANumberRequest extends SpeakeasyBase {
    request: shared.NumberDetails;
}
export declare class CancelANumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    response?: shared.Response;
    unauthorized?: shared.Unauthorized;
}
