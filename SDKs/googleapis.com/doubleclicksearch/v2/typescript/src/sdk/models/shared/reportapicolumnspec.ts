import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportApiColumnSpec
/** 
 * A request object used to create a DoubleClick Search report.
**/
export class ReportApiColumnSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnName" })
  columnName?: string;

  @Metadata({ data: "json, name=customDimensionName" })
  customDimensionName?: string;

  @Metadata({ data: "json, name=customMetricName" })
  customMetricName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=groupByColumn" })
  groupByColumn?: boolean;

  @Metadata({ data: "json, name=headerText" })
  headerText?: string;

  @Metadata({ data: "json, name=platformSource" })
  platformSource?: string;

  @Metadata({ data: "json, name=productReportPerspective" })
  productReportPerspective?: string;

  @Metadata({ data: "json, name=savedColumnName" })
  savedColumnName?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
