import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionProfile } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";


// DiscoverConnectionProfileRequest
/** 
 * Request message for 'discover' ConnectionProfile request.
**/
export class DiscoverConnectionProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionProfile" })
  connectionProfile?: ConnectionProfile;

  @Metadata({ data: "json, name=connectionProfileName" })
  connectionProfileName?: string;

  @Metadata({ data: "json, name=fullHierarchy" })
  fullHierarchy?: boolean;

  @Metadata({ data: "json, name=hierarchyDepth" })
  hierarchyDepth?: number;

  @Metadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @Metadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;

  @Metadata({ data: "json, name=postgresqlRdbms" })
  postgresqlRdbms?: PostgresqlRdbms;
}
