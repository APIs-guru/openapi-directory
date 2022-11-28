import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeriesTimerInfoDto } from "./seriestimerinfodto";



export class SeriesTimerInfoDtoQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: SeriesTimerInfoDto })
  items?: SeriesTimerInfoDto[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
