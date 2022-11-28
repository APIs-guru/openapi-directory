import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillStageDetailsPathParams extends SpeakeasyBase {
    billId: number;
    billStageId: number;
}
export declare class GetBillStageDetailsRequest extends SpeakeasyBase {
    pathParams: GetBillStageDetailsPathParams;
}
export declare class GetBillStageDetailsResponse extends SpeakeasyBase {
    billStageDetails?: shared.BillStageDetails;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
