import { SpeakeasyBase } from "../../../internal/utils";
import { SqlExternalSyncSettingError } from "./sqlexternalsyncsettingerror";
/**
 * Instance verify external sync settings response.
**/
export declare class SqlInstancesVerifyExternalSyncSettingsResponse extends SpeakeasyBase {
    errors?: SqlExternalSyncSettingError[];
    kind?: string;
    warnings?: SqlExternalSyncSettingError[];
}
