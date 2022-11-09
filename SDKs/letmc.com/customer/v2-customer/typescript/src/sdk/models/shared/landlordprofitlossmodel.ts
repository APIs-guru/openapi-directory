import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LandlordProfitLossSectionModel } from "./landlordprofitlosssectionmodel";
import { LandlordProfitLossSectionModel } from "./landlordprofitlosssectionmodel";
import { LandlordProfitLossSectionModel } from "./landlordprofitlosssectionmodel";


// LandlordProfitLossModel
/** 
 * Class to represent proffit loss report.
**/
export class LandlordProfitLossModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectCosts" })
  directCosts?: LandlordProfitLossSectionModel;

  @Metadata({ data: "json, name=GrossProfitLoss" })
  grossProfitLoss?: LandlordProfitLossSectionModel;

  @Metadata({ data: "json, name=Income" })
  income?: LandlordProfitLossSectionModel;
}
