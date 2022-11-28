import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesDataRow } from "./enterprisecrmcardstemplatesaplosseriesdatarow";



// EnterpriseCrmCardsTemplatesAplosSeriesData
/** 
 * Data used to render an Aplos Series card.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: EnterpriseCrmCardsTemplatesAplosSeriesDataRow })
  rows?: EnterpriseCrmCardsTemplatesAplosSeriesDataRow[];
}
