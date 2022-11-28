import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OverallQualityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_quality" })
  dataQuality?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=row_count" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=sites" })
  sites?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;
}
