import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlSourceConfig } from "./mysqlsourceconfig";
import { OracleSourceConfig } from "./oraclesourceconfig";


// SourceConfig
/** 
 * The configuration of the stream source.
**/
export class SourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlSourceConfig" })
  mysqlSourceConfig?: MysqlSourceConfig;

  @Metadata({ data: "json, name=oracleSourceConfig" })
  oracleSourceConfig?: OracleSourceConfig;

  @Metadata({ data: "json, name=sourceConnectionProfileName" })
  sourceConnectionProfileName?: string;
}
