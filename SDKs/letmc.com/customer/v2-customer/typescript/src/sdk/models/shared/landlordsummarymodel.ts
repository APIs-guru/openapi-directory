import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordSummaryTenancyModel } from "./landlordsummarytenancymodel";


// LandlordSummaryModel
/** 
 * Landlord Summary - Landing Page.
**/
export class LandlordSummaryModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountBalance" })
  accountBalance?: number;

  @Metadata({ data: "json, name=LastPayment" })
  lastPayment?: Date;

  @Metadata({ data: "json, name=Tenancies", elemType: shared.LandlordSummaryTenancyModel })
  tenancies?: LandlordSummaryTenancyModel[];

  @Metadata({ data: "json, name=TotalRentArrears" })
  totalRentArrears?: number;
}
