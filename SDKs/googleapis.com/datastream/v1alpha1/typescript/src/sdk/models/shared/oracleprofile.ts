import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OracleProfile
/** 
 * Oracle database profile.
**/
export class OracleProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionAttributes" })
  connectionAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=databaseService" })
  databaseService?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
