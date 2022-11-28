import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslConfigInput } from "./sslconfig";
import { SslConfig } from "./sslconfig";



// MySqlConnectionProfileInput
/** 
 * Specifies connection parameters required specifically for MySQL databases.
**/
export class MySqlConnectionProfileInput extends SpeakeasyBase {
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


// MySqlConnectionProfile
/** 
 * Specifies connection parameters required specifically for MySQL databases.
**/
export class MySqlConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

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
