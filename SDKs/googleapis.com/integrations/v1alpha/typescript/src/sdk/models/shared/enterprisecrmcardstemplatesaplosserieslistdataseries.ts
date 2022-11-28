import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesData } from "./enterprisecrmcardstemplatesaplosseriesdata";



export class EnterpriseCrmCardsTemplatesAplosSeriesListDataSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: EnterpriseCrmCardsTemplatesAplosSeriesData;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
