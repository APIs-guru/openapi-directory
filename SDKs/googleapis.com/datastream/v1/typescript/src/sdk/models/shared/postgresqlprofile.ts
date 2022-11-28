import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostgresqlProfile
/** 
 * PostgreSQL database profile.
**/
export class PostgresqlProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
