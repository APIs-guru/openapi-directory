import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OracleRdbms } from "./oraclerdbms";
import { OracleRdbms } from "./oraclerdbms";


// OracleSourceConfig
/** 
 * Oracle data source configuration
**/
export class OracleSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dropLargeObjects" })
  dropLargeObjects?: Map<string, any>;

  @Metadata({ data: "json, name=excludeObjects" })
  excludeObjects?: OracleRdbms;

  @Metadata({ data: "json, name=includeObjects" })
  includeObjects?: OracleRdbms;

  @Metadata({ data: "json, name=maxConcurrentCdcTasks" })
  maxConcurrentCdcTasks?: number;

  @Metadata({ data: "json, name=streamLargeObjects" })
  streamLargeObjects?: Map<string, any>;
}
