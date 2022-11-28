import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAmendmentsPathParams extends SpeakeasyBase {
    billId: number;
    billStageId: number;
}
export declare class GetAmendmentsQueryParams extends SpeakeasyBase {
    decision?: shared.DecisionEnum;
    memberId?: number;
    searchTerm?: string;
    skip?: number;
    take?: number;
}
export declare class GetAmendmentsRequest extends SpeakeasyBase {
    pathParams: GetAmendmentsPathParams;
    queryParams: GetAmendmentsQueryParams;
}
export declare class GetAmendmentsResponse extends SpeakeasyBase {
    amendmentSearchItemSearchResult?: shared.AmendmentSearchItemSearchResult;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
