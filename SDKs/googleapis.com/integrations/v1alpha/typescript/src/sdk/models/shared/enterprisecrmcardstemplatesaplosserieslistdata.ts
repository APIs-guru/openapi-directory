import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries } from "./enterprisecrmcardstemplatesaplosserieslistdataseries";


// EnterpriseCrmCardsTemplatesAplosSeriesListData
/** 
 * Data used for Aplos charts that accept multiple Series.
**/
export class EnterpriseCrmCardsTemplatesAplosSeriesListData extends SpeakeasyBase {
  @Metadata({ data: "json, name=series", elemType: shared.EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries })
  series?: EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries[];
}
