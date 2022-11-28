import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportApiColumnSpec
/** 
 * A request object used to create a DoubleClick Search report.
**/
export class ReportApiColumnSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnName" })
  columnName?: string;

  @SpeakeasyMetadata({ data: "json, name=customDimensionName" })
  customDimensionName?: string;

  @SpeakeasyMetadata({ data: "json, name=customMetricName" })
  customMetricName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=groupByColumn" })
  groupByColumn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headerText" })
  headerText?: string;

  @SpeakeasyMetadata({ data: "json, name=platformSource" })
  platformSource?: string;

  @SpeakeasyMetadata({ data: "json, name=productReportPerspective" })
  productReportPerspective?: string;

  @SpeakeasyMetadata({ data: "json, name=savedColumnName" })
  savedColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
