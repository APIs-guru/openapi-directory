import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InvoiceItemTypeEnum {
    Hourly = "hourly",
    Misc = "misc"
}
/**
 * An InvoiceItem object.
**/
export declare class InvoiceItem extends SpeakeasyBase {
    amount?: number;
    from?: Date;
    label?: string;
    quantity?: number;
    tax?: number;
    to?: Date;
    total?: number;
    type?: InvoiceItemTypeEnum;
    unitPrice?: string;
}
