import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingConfig
/** 
 * Describes the billing configuration for a new tenant project.
**/
export class BillingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccount" })
  billingAccount?: string;
}
