import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSittingsQueryParams extends SpeakeasyBase {
    dateFrom?: Date;
    dateTo?: Date;
    house?: shared.HouseEnum;
    skip?: number;
    take?: number;
}
export declare class GetSittingsRequest extends SpeakeasyBase {
    queryParams: GetSittingsQueryParams;
}
export declare class GetSittingsResponse extends SpeakeasyBase {
    billStageSittingSearchResult?: shared.BillStageSittingSearchResult;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
