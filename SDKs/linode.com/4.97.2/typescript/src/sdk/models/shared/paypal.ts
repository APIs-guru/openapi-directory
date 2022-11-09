import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayPal
/** 
 * An object representing the staging of a Payment via PayPal.
 * 
**/
export class PayPal extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancel_url" })
  cancelUrl: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl: string;

  @Metadata({ data: "json, name=usd" })
  usd: string;
}
