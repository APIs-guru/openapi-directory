import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlSourceConfig } from "./mysqlsourceconfig";
import { OracleSourceConfig } from "./oraclesourceconfig";
import { PostgresqlSourceConfig } from "./postgresqlsourceconfig";



// SourceConfig
/** 
 * The configuration of the stream source.
**/
export class SourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlSourceConfig" })
  mysqlSourceConfig?: MysqlSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=oracleSourceConfig" })
  oracleSourceConfig?: OracleSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=postgresqlSourceConfig" })
  postgresqlSourceConfig?: PostgresqlSourceConfig;

  @SpeakeasyMetadata({ data: "json, name=sourceConnectionProfile" })
  sourceConnectionProfile?: string;
}
