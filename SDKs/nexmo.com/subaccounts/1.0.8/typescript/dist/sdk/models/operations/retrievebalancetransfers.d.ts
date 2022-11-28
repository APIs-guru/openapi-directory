import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveBalanceTransfersPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class RetrieveBalanceTransfersQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate: string;
    subaccount?: string;
}
export declare class RetrieveBalanceTransfersSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveBalanceTransfers401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class RetrieveBalanceTransfers404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveBalanceTransfersRequest extends SpeakeasyBase {
    pathParams: RetrieveBalanceTransfersPathParams;
    queryParams: RetrieveBalanceTransfersQueryParams;
    security: RetrieveBalanceTransfersSecurity;
}
export declare class RetrieveBalanceTransfersResponse extends SpeakeasyBase {
    contentType: string;
    listBalanceTransfersResponse?: any;
    statusCode: number;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    retrieveBalanceTransfers401ApplicationJsonObject?: RetrieveBalanceTransfers401ApplicationJson;
    retrieveBalanceTransfers404ApplicationJsonObject?: RetrieveBalanceTransfers404ApplicationJson;
}
