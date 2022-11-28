import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayPal
/** 
 * An object representing the staging of a Payment via PayPal.
 * 
**/
export class PayPal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancel_url" })
  cancelUrl: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=usd" })
  usd: string;
}
