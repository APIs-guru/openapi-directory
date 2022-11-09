import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandlordProfitLossRowModel } from "./landlordprofitlossrowmodel";


// LandlordProfitLossSectionModel
/** 
 * Class for a group of entries.
**/
export class LandlordProfitLossSectionModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rows", elemType: shared.LandlordProfitLossRowModel })
  rows?: LandlordProfitLossRowModel[];
}
