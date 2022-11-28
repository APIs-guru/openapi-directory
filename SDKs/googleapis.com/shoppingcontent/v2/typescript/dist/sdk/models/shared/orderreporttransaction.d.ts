import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { Amount } from "./amount";
import { ProductAmount } from "./productamount";
export declare class OrderReportTransaction extends SpeakeasyBase {
    disbursementAmount?: Price;
    disbursementCreationDate?: string;
    disbursementDate?: string;
    disbursementId?: string;
    merchantId?: string;
    merchantOrderId?: string;
    orderId?: string;
    productAmount?: Amount;
    productAmountWithRemittedTax?: ProductAmount;
    transactionDate?: string;
}
