import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveCreditTransfersPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class RetrieveCreditTransfersQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate: string;
    subaccount?: string;
}
export declare class RetrieveCreditTransfersSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveCreditTransfers401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class RetrieveCreditTransfers404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveCreditTransfersRequest extends SpeakeasyBase {
    pathParams: RetrieveCreditTransfersPathParams;
    queryParams: RetrieveCreditTransfersQueryParams;
    security: RetrieveCreditTransfersSecurity;
}
export declare class RetrieveCreditTransfersResponse extends SpeakeasyBase {
    contentType: string;
    listCreditTransfersResponse?: any;
    statusCode: number;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    retrieveCreditTransfers401ApplicationJsonObject?: RetrieveCreditTransfers401ApplicationJson;
    retrieveCreditTransfers404ApplicationJsonObject?: RetrieveCreditTransfers404ApplicationJson;
}
