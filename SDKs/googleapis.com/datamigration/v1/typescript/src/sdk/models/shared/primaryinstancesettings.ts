import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MachineConfig } from "./machineconfig";



// PrimaryInstanceSettingsInput
/** 
 * Settings for the cluster's primary instance
**/
export class PrimaryInstanceSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineConfig" })
  machineConfig?: MachineConfig;
}


// PrimaryInstanceSettings
/** 
 * Settings for the cluster's primary instance
**/
export class PrimaryInstanceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineConfig" })
  machineConfig?: MachineConfig;

  @SpeakeasyMetadata({ data: "json, name=privateIp" })
  privateIp?: string;
}
