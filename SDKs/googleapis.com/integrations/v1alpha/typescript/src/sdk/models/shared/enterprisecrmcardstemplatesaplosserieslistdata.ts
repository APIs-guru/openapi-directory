import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries } from "./enterprisecrmcardstemplatesaplosserieslistdataseries";



// EnterpriseCrmCardsTemplatesAplosSeriesListData
/** 
 * Data used for Aplos charts that accept multiple Series.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesListData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=series", elemType: EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries })
  series?: EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries[];
}
