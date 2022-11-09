import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountTaxTaxRule
/** 
 * Tax calculation rule to apply in a state or province (USA only).
**/
export class AccountTaxTaxRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=ratePercent" })
  ratePercent?: string;

  @Metadata({ data: "json, name=shippingTaxed" })
  shippingTaxed?: boolean;

  @Metadata({ data: "json, name=useGlobalRate" })
  useGlobalRate?: boolean;
}
