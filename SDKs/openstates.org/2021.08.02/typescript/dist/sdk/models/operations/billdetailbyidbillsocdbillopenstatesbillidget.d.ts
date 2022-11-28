import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams extends SpeakeasyBase {
    openstatesBillId: string;
}
export declare class BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    include?: shared.BillIncludeEnum[];
}
export declare class BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class BillDetailByIdBillsOcdBillOpenstatesBillIdGetRequest extends SpeakeasyBase {
    pathParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetPathParams;
    queryParams: BillDetailByIdBillsOcdBillOpenstatesBillIdGetQueryParams;
    headers: BillDetailByIdBillsOcdBillOpenstatesBillIdGetHeaders;
}
export declare class BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse extends SpeakeasyBase {
    bill?: shared.Bill;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
