import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslConfig } from "./sslconfig";
import { SslConfigInput } from "./sslconfig";


export enum PostgreSqlConnectionProfileNetworkArchitectureEnum {
    NetworkArchitectureUnspecified = "NETWORK_ARCHITECTURE_UNSPECIFIED",
    NetworkArchitectureOldCsqlProducer = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER",
    NetworkArchitectureNewCsqlProducer = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
}


// PostgreSqlConnectionProfile
/** 
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
export class PostgreSqlConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=networkArchitecture" })
  networkArchitecture?: PostgreSqlConnectionProfileNetworkArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordSet" })
  passwordSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: SslConfig;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// PostgreSqlConnectionProfileInput
/** 
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
export class PostgreSqlConnectionProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=ssl" })
  ssl?: SslConfigInput;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
