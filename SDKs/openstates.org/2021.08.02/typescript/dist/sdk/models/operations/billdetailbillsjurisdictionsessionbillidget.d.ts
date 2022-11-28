import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BillDetailBillsJurisdictionSessionBillIdGetPathParams extends SpeakeasyBase {
    billId: string;
    jurisdiction: string;
    session: string;
}
export declare class BillDetailBillsJurisdictionSessionBillIdGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    include?: shared.BillIncludeEnum[];
}
export declare class BillDetailBillsJurisdictionSessionBillIdGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class BillDetailBillsJurisdictionSessionBillIdGetRequest extends SpeakeasyBase {
    pathParams: BillDetailBillsJurisdictionSessionBillIdGetPathParams;
    queryParams: BillDetailBillsJurisdictionSessionBillIdGetQueryParams;
    headers: BillDetailBillsJurisdictionSessionBillIdGetHeaders;
}
export declare class BillDetailBillsJurisdictionSessionBillIdGetResponse extends SpeakeasyBase {
    bill?: shared.Bill;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
