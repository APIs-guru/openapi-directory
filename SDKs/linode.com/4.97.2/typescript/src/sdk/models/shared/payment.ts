import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Payment
/** 
 * Payment object response.
**/
export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=usd" })
  usd?: number;
}
