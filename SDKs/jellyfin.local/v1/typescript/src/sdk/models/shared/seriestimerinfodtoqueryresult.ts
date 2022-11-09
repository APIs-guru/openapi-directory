import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeriesTimerInfoDto } from "./seriestimerinfodto";


export class SeriesTimerInfoDtoQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.SeriesTimerInfoDto })
  items?: SeriesTimerInfoDto[];

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
