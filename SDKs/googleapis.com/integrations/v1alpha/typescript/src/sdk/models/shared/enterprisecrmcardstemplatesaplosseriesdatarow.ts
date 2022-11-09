import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmCardsCellValue } from "./enterprisecrmcardscellvalue";
import { EnterpriseCrmCardsCellValue } from "./enterprisecrmcardscellvalue";


// EnterpriseCrmCardsTemplatesAplosSeriesDataRow
/** 
 * Aplos series row is exactly two columns labeled x and y.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesDataRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: EnterpriseCrmCardsCellValue;

  @Metadata({ data: "json, name=y" })
  y?: EnterpriseCrmCardsCellValue;
}
