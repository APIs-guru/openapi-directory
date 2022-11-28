import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to load a snapshot into a Cloud Composer environment.
**/
export declare class LoadSnapshotRequest extends SpeakeasyBase {
    skipAirflowOverridesSetting?: boolean;
    skipEnvironmentVariablesSetting?: boolean;
    skipGcsDataCopying?: boolean;
    skipPypiPackagesInstallation?: boolean;
    snapshotPath?: string;
}
