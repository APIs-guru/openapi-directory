import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillsSearchBillsGetQueryParams extends SpeakeasyBase {
    actionSince?: string;
    apikey?: string;
    chamber?: string;
    classification?: string;
    createdSince?: string;
    include?: shared.BillIncludeEnum[];
    jurisdiction?: string;
    page?: number;
    perPage?: number;
    q?: string;
    session?: string;
    sort?: shared.BillSortOptionEnum;
    sponsor?: string;
    sponsorClassification?: string;
    subject?: string[];
    updatedSince?: string;
}
export declare class BillsSearchBillsGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class BillsSearchBillsGetRequest extends SpeakeasyBase {
    queryParams: BillsSearchBillsGetQueryParams;
    headers: BillsSearchBillsGetHeaders;
}
export declare class BillsSearchBillsGetResponse extends SpeakeasyBase {
    billList?: shared.BillList;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
