import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfileInput } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";



// DiscoverConnectionProfileRequestInput
/** 
 * Request message for 'discover' ConnectionProfile request.
**/
export class DiscoverConnectionProfileRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionProfile" })
  connectionProfile?: ConnectionProfileInput;

  @SpeakeasyMetadata({ data: "json, name=connectionProfileName" })
  connectionProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullHierarchy" })
  fullHierarchy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hierarchyDepth" })
  hierarchyDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=postgresqlRdbms" })
  postgresqlRdbms?: PostgresqlRdbms;
}
