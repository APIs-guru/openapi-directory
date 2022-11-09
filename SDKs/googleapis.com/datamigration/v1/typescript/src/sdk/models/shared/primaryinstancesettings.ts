import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MachineConfig } from "./machineconfig";


// PrimaryInstanceSettings
/** 
 * Settings for the cluster's primary instance
**/
export class PrimaryInstanceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=machineConfig" })
  machineConfig?: MachineConfig;

  @Metadata({ data: "json, name=privateIp" })
  privateIp?: string;
}
