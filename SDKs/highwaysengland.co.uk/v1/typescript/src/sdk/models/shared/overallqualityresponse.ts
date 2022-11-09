import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OverallQualityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_quality" })
  dataQuality?: number;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=row_count" })
  rowCount?: number;

  @Metadata({ data: "json, name=sites" })
  sites?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;
}
