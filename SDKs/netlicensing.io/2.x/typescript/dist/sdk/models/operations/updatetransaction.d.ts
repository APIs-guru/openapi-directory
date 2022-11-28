import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionPathParams extends SpeakeasyBase {
    transactionNumber: string;
}
export declare enum UpdateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}
export declare enum UpdateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}
export declare class UpdateTransactionRequestBody extends SpeakeasyBase {
    active?: boolean;
    dateClosed?: Date;
    dateCreated?: Date;
    number?: string;
    paymentMethod?: string;
    source?: UpdateTransactionRequestBodySourceEnum;
    status?: UpdateTransactionRequestBodyStatusEnum;
}
export declare class UpdateTransactionSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateTransactionRequest extends SpeakeasyBase {
    pathParams: UpdateTransactionPathParams;
    request?: UpdateTransactionRequestBody;
    security: UpdateTransactionSecurity;
}
export declare class UpdateTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
