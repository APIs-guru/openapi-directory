import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Invoice
/** 
 * Account Invoice object
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=subtotal" })
  subtotal?: number;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
