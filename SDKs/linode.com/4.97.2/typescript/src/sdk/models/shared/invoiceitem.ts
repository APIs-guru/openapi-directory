import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvoiceItemTypeEnum {
    Hourly = "hourly",
    Misc = "misc"
}


// InvoiceItem
/** 
 * An InvoiceItem object.
**/
export class InvoiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InvoiceItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: string;
}
