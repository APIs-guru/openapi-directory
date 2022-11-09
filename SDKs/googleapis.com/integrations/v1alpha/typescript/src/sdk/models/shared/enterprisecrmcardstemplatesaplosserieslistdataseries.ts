import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesData } from "./enterprisecrmcardstemplatesaplosseriesdata";


export class EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: EnterpriseCrmCardsTemplatesAplosSeriesData;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
