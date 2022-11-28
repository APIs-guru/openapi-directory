import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetABatchOfConsumerTransactionClassificationResultsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact extends SpeakeasyBase {
    email?: string;
    phone?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation extends SpeakeasyBase {
    address?: string;
    city?: string;
    country?: string;
    lat?: number;
    lon?: number;
    postalCode?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating extends SpeakeasyBase {
    reviews?: number;
    value?: number;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults extends SpeakeasyBase {
    contact?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact;
    labels?: string[];
    location?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation;
    logo?: string;
    merchant?: string;
    person?: string;
    rating?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating;
    transactionId?: string;
    website?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResults200ApplicationJson extends SpeakeasyBase {
    id?: string;
    progress?: number;
    results?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults[];
    status?: string;
    updatedAt?: string;
}
export declare class GetABatchOfConsumerTransactionClassificationResultsRequest extends SpeakeasyBase {
    pathParams: GetABatchOfConsumerTransactionClassificationResultsPathParams;
}
export declare class GetABatchOfConsumerTransactionClassificationResultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject?: GetABatchOfConsumerTransactionClassificationResults200ApplicationJson;
}
