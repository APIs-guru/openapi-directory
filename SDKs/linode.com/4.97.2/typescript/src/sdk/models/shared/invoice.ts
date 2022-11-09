import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Invoice
/** 
 * Account Invoice object
**/
export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=subtotal" })
  subtotal?: number;

  @Metadata({ data: "json, name=tax" })
  tax?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
