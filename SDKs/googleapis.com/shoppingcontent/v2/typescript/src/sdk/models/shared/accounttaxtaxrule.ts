import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountTaxTaxRule
/** 
 * Tax calculation rule to apply in a state or province (USA only).
**/
export class AccountTaxTaxRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePercent" })
  ratePercent?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingTaxed" })
  shippingTaxed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useGlobalRate" })
  useGlobalRate?: boolean;
}
