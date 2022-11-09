import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";


// DataSourceFormula
/** 
 * A data source formula.
**/
export class DataSourceFormula extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
