import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvoiceItemTypeEnum {
    Hourly = "hourly"
,    Misc = "misc"
}


// InvoiceItem
/** 
 * An InvoiceItem object.
**/
export class InvoiceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=from" })
  from?: Date;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=tax" })
  tax?: number;

  @Metadata({ data: "json, name=to" })
  to?: Date;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=type" })
  type?: InvoiceItemTypeEnum;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: string;
}
