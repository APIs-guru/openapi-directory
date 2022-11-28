import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { ProductAmount } from "./productamount";
export declare class OrderReportTransaction extends SpeakeasyBase {
    disbursementAmount?: Price;
    disbursementCreationDate?: string;
    disbursementDate?: string;
    disbursementId?: string;
    merchantId?: string;
    merchantOrderId?: string;
    orderId?: string;
    productAmount?: ProductAmount;
    transactionDate?: string;
}
