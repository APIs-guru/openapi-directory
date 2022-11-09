import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";


// DataSourceChartProperties
/** 
 * Properties of a data source chart.
**/
export class DataSourceChartProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
