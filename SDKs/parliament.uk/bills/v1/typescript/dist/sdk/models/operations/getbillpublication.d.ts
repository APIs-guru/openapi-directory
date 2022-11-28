import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillPublicationPathParams extends SpeakeasyBase {
    billId: number;
}
export declare class GetBillPublicationRequest extends SpeakeasyBase {
    pathParams: GetBillPublicationPathParams;
}
export declare class GetBillPublicationResponse extends SpeakeasyBase {
    billPublicationList?: shared.BillPublicationList;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
