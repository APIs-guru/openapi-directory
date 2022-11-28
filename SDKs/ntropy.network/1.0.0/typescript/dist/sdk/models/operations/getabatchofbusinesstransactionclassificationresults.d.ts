import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetABatchOfBusinessTransactionClassificationResultsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
    labels?: string[];
    logo?: string;
    merchant?: string;
    transactionId?: string;
    website?: string;
}
export declare class GetABatchOfBusinessTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
    id?: string;
    progress?: number;
    results?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJsonResults[];
    status?: string;
    updatedAt?: string;
}
export declare class GetABatchOfBusinessTransactionClassificationResultsRequest extends SpeakeasyBase {
    pathParams: GetABatchOfBusinessTransactionClassificationResultsPathParams;
}
export declare class GetABatchOfBusinessTransactionClassificationResultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getABatchOfBusinessTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfBusinessTransactionClassificationResults200ApplicationJson;
}
