import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}
export declare enum CreateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}
export declare class CreateTransactionRequestBody extends SpeakeasyBase {
    active: boolean;
    dateClosed?: Date;
    dateCreated?: Date;
    licenseeNumber?: string;
    number?: string;
    paymentMethod?: string;
    source: CreateTransactionRequestBodySourceEnum;
    status: CreateTransactionRequestBodyStatusEnum;
}
export declare class CreateTransactionSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateTransactionRequest extends SpeakeasyBase {
    request?: CreateTransactionRequestBody;
    security: CreateTransactionSecurity;
}
export declare class CreateTransactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
