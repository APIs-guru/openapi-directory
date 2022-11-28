import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";



// DataSourceChartProperties
/** 
 * Properties of a data source chart.
**/
export class DataSourceChartProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
