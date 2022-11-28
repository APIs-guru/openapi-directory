import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandlordProfitLossRowModel } from "./landlordprofitlossrowmodel";



// LandlordProfitLossSectionModel
/** 
 * Class for a group of entries.
**/
export class LandlordProfitLossSectionModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rows", elemType: LandlordProfitLossRowModel })
  rows?: LandlordProfitLossRowModel[];
}
