import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslConfig } from "./sslconfig";

export enum PostgreSqlConnectionProfileNetworkArchitectureEnum {
    NetworkArchitectureUnspecified = "NETWORK_ARCHITECTURE_UNSPECIFIED"
,    NetworkArchitectureOldCsqlProducer = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER"
,    NetworkArchitectureNewCsqlProducer = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
}


// PostgreSqlConnectionProfile
/** 
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
export class PostgreSqlConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=networkArchitecture" })
  networkArchitecture?: PostgreSqlConnectionProfileNetworkArchitectureEnum;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=passwordSet" })
  passwordSet?: boolean;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: SslConfig;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
