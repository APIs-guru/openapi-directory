import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";



// DataSourceFormula
/** 
 * A data source formula.
**/
export class DataSourceFormula extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
