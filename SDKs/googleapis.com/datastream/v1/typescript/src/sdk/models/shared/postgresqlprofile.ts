import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostgresqlProfile
/** 
 * PostgreSQL database profile.
**/
export class PostgresqlProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
