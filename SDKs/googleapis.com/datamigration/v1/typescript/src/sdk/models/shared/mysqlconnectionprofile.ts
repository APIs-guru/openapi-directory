import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslConfig } from "./sslconfig";


// MySqlConnectionProfile
/** 
 * Specifies connection parameters required specifically for MySQL databases.
**/
export class MySqlConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

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
