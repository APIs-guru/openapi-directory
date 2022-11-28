import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePairStringString } from "./keyvaluepairstringstring";



// LandlordProfitLossRowModel
/** 
 * Class for a group of entries.
**/
export class LandlordProfitLossRowModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonthTotals", elemType: KeyValuePairStringString })
  monthTotals?: KeyValuePairStringString[];

  @SpeakeasyMetadata({ data: "json, name=NominalCode" })
  nominalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: string;
}
