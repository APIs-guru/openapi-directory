import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmCardsTemplatesAplosSeriesDataRow } from "./enterprisecrmcardstemplatesaplosseriesdatarow";


// EnterpriseCrmCardsTemplatesAplosSeriesData
/** 
 * Data used to render an Aplos Series card.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesData extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.EnterpriseCrmCardsTemplatesAplosSeriesDataRow })
  rows?: EnterpriseCrmCardsTemplatesAplosSeriesDataRow[];
}
