import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BuyANumberRequest extends SpeakeasyBase {
    request: shared.NumberDetails;
}
export declare class BuyANumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    response?: shared.Response;
    response420?: shared.Response420;
    unauthorized?: shared.Unauthorized;
}
