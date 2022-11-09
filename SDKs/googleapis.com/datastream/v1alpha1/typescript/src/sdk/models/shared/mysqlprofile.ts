import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlSslConfig } from "./mysqlsslconfig";


// MysqlProfile
/** 
 * MySQL database profile.
**/
export class MysqlProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=sslConfig" })
  sslConfig?: MysqlSslConfig;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
