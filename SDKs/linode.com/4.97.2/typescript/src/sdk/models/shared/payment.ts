import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Payment
/** 
 * Payment object response.
**/
export class Payment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=usd" })
  usd?: number;
}
