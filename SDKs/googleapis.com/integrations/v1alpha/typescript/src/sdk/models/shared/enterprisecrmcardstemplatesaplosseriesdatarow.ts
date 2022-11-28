import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsCellValue } from "./enterprisecrmcardscellvalue";



// EnterpriseCrmCardsTemplatesAplosSeriesDataRow
/** 
 * Aplos series row is exactly two columns labeled x and y.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesDataRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: EnterpriseCrmCardsCellValue;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: EnterpriseCrmCardsCellValue;
}
