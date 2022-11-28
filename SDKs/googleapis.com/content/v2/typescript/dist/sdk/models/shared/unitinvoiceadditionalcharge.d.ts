import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Promotion } from "./promotion";
export declare class UnitInvoiceAdditionalCharge extends SpeakeasyBase {
    additionalChargeAmount?: Amount;
    additionalChargePromotions?: Promotion[];
    type?: string;
}
