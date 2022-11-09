import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValuePairStringString } from "./keyvaluepairstringstring";


// LandlordProfitLossRowModel
/** 
 * Class for a group of entries.
**/
export class LandlordProfitLossRowModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonthTotals", elemType: shared.KeyValuePairStringString })
  monthTotals?: KeyValuePairStringString[];

  @Metadata({ data: "json, name=NominalCode" })
  nominalCode?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Total" })
  total?: string;
}
