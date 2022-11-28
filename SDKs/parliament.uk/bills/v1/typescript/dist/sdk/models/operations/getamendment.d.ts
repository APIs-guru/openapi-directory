import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAmendmentPathParams extends SpeakeasyBase {
    amendmentId: number;
    billId: number;
    billStageId: number;
}
export declare class GetAmendmentRequest extends SpeakeasyBase {
    pathParams: GetAmendmentPathParams;
}
export declare class GetAmendmentResponse extends SpeakeasyBase {
    amendmentDetail?: shared.AmendmentDetail;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
