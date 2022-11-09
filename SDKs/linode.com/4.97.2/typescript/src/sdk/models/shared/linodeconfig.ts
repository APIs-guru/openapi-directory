import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Devices } from "./devices";
import { LinodeConfigInterface } from "./linodeconfiginterface";


// LinodeConfigHelpers
/** 
 * Helpers enabled when booting to this Linode Config.
**/
export class LinodeConfigHelpers extends SpeakeasyBase {
  @Metadata({ data: "json, name=devtmpfs_automount" })
  devtmpfsAutomount?: boolean;

  @Metadata({ data: "json, name=distro" })
  distro?: boolean;

  @Metadata({ data: "json, name=modules_dep" })
  modulesDep?: boolean;

  @Metadata({ data: "json, name=network" })
  network?: boolean;

  @Metadata({ data: "json, name=updatedb_disabled" })
  updatedbDisabled?: boolean;
}

export enum LinodeConfigRunLevelEnum {
    Default = "default"
,    Single = "single"
,    Binbash = "binbash"
}

export enum LinodeConfigVirtModeEnum {
    Paravirt = "paravirt"
,    Fullvirt = "fullvirt"
}


export class LinodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=devices" })
  devices: Devices;

  @Metadata({ data: "json, name=helpers" })
  helpers?: LinodeConfigHelpers;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interfaces", elemType: shared.LinodeConfigInterface })
  interfaces?: LinodeConfigInterface[];

  @Metadata({ data: "json, name=kernel" })
  kernel?: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=memory_limit" })
  memoryLimit?: number;

  @Metadata({ data: "json, name=root_device" })
  rootDevice?: string;

  @Metadata({ data: "json, name=run_level" })
  runLevel?: LinodeConfigRunLevelEnum;

  @Metadata({ data: "json, name=virt_mode" })
  virtMode?: LinodeConfigVirtModeEnum;
}
