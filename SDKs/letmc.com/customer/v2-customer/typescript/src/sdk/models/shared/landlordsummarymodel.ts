import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordSummaryTenancyModel } from "./landlordsummarytenancymodel";



// LandlordSummaryModel
/** 
 * Landlord Summary - Landing Page.
**/
export class LandlordSummaryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountBalance" })
  accountBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=LastPayment" })
  lastPayment?: Date;

  @SpeakeasyMetadata({ data: "json, name=Tenancies", elemType: LandlordSummaryTenancyModel })
  tenancies?: LandlordSummaryTenancyModel[];

  @SpeakeasyMetadata({ data: "json, name=TotalRentArrears" })
  totalRentArrears?: number;
}
