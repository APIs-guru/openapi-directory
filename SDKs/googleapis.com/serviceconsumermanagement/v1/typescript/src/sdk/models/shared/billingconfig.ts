import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingConfig
/** 
 * Describes the billing configuration for a new tenant project.
**/
export class BillingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccount" })
  billingAccount?: string;
}
