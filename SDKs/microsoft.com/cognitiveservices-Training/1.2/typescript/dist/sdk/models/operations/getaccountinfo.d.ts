import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountInfoHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetAccountInfoRequest extends SpeakeasyBase {
    headers: GetAccountInfoHeaders;
}
export declare class GetAccountInfoResponse extends SpeakeasyBase {
    account?: shared.Account;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
