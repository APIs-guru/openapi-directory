import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlExternalSyncSettingError } from "./sqlexternalsyncsettingerror";
import { SqlExternalSyncSettingError } from "./sqlexternalsyncsettingerror";


// SqlInstancesVerifyExternalSyncSettingsResponse
/** 
 * Instance verify external sync settings response.
**/
export class SqlInstancesVerifyExternalSyncSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.SqlExternalSyncSettingError })
  errors?: SqlExternalSyncSettingError[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.SqlExternalSyncSettingError })
  warnings?: SqlExternalSyncSettingError[];
}
