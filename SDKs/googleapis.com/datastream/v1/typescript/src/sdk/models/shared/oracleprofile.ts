import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OracleProfile
/** 
 * Oracle database profile.
**/
export class OracleProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionAttributes" })
  connectionAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=databaseService" })
  databaseService?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
