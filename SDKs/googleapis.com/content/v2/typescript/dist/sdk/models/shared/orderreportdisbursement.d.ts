import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Order disbursement. All methods require the payment analyst role.
**/
export declare class OrderReportDisbursement extends SpeakeasyBase {
    disbursementAmount?: Price;
    disbursementCreationDate?: string;
    disbursementDate?: string;
    disbursementId?: string;
    merchantId?: string;
}
