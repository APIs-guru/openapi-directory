import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1BillTypesQueryParams extends SpeakeasyBase {
    category?: shared.BillTypeCategoryEnum;
    skip?: number;
    take?: number;
}
export declare class GetApiV1BillTypesRequest extends SpeakeasyBase {
    queryParams: GetApiV1BillTypesQueryParams;
}
export declare class GetApiV1BillTypesResponse extends SpeakeasyBase {
    billTypeSearchResult?: shared.BillTypeSearchResult;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
