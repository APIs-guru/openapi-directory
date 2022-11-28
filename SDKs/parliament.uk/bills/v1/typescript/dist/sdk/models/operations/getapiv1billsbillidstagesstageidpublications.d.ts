import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1BillsBillIdStagesStageIdPublicationsPathParams extends SpeakeasyBase {
    billId: number;
    stageId: number;
}
export declare class GetApiV1BillsBillIdStagesStageIdPublicationsRequest extends SpeakeasyBase {
    pathParams: GetApiV1BillsBillIdStagesStageIdPublicationsPathParams;
}
export declare class GetApiV1BillsBillIdStagesStageIdPublicationsResponse extends SpeakeasyBase {
    billStagePublicationList?: shared.BillStagePublicationList;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
