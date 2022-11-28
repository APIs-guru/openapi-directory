import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillPathParams extends SpeakeasyBase {
    billId: number;
}
export declare class GetBillRequest extends SpeakeasyBase {
    pathParams: GetBillPathParams;
}
export declare class GetBillResponse extends SpeakeasyBase {
    bill?: shared.Bill;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
