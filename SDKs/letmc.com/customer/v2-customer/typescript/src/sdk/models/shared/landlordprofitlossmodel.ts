import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordProfitLossSectionModel } from "./landlordprofitlosssectionmodel";



// LandlordProfitLossModel
/** 
 * Class to represent proffit loss report.
**/
export class LandlordProfitLossModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectCosts" })
  directCosts?: LandlordProfitLossSectionModel;

  @SpeakeasyMetadata({ data: "json, name=GrossProfitLoss" })
  grossProfitLoss?: LandlordProfitLossSectionModel;

  @SpeakeasyMetadata({ data: "json, name=Income" })
  income?: LandlordProfitLossSectionModel;
}
