import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlExternalSyncSettingError } from "./sqlexternalsyncsettingerror";



// SqlInstancesVerifyExternalSyncSettingsResponse
/** 
 * Instance verify external sync settings response.
**/
export class SqlInstancesVerifyExternalSyncSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: SqlExternalSyncSettingError })
  errors?: SqlExternalSyncSettingError[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: SqlExternalSyncSettingError })
  warnings?: SqlExternalSyncSettingError[];
}
