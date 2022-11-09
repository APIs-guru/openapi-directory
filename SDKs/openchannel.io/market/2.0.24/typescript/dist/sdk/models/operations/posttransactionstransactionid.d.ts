import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostTransactionsTransactionIdPathParams extends SpeakeasyBase {
    transactionId: string;
}
export declare class PostTransactionsTransactionIdQueryParams extends SpeakeasyBase {
    customData?: string;
}
export declare class PostTransactionsTransactionIdRequest extends SpeakeasyBase {
    pathParams: PostTransactionsTransactionIdPathParams;
    queryParams: PostTransactionsTransactionIdQueryParams;
}
export declare class PostTransactionsTransactionIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
