import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmissionsGramsPerPax
/** 
 * Grouped emissions per seating class results.
**/
export class EmissionsGramsPerPax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business" })
  business?: number;

  @SpeakeasyMetadata({ data: "json, name=economy" })
  economy?: number;

  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "json, name=premiumEconomy" })
  premiumEconomy?: number;
}
