import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Devices } from "./devices";
import { LinodeConfigInterface } from "./linodeconfiginterface";



// LinodeConfigHelpers
/** 
 * Helpers enabled when booting to this Linode Config.
**/
export class LinodeConfigHelpers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devtmpfs_automount" })
  devtmpfsAutomount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distro" })
  distro?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modules_dep" })
  modulesDep?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedb_disabled" })
  updatedbDisabled?: boolean;
}

export enum LinodeConfigRunLevelEnum {
    Default = "default",
    Single = "single",
    Binbash = "binbash"
}

export enum LinodeConfigVirtModeEnum {
    Paravirt = "paravirt",
    Fullvirt = "fullvirt"
}


export class LinodeConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices: Devices;

  @SpeakeasyMetadata({ data: "json, name=helpers" })
  helpers?: LinodeConfigHelpers;

  @SpeakeasyMetadata({ data: "json, name=interfaces", elemType: LinodeConfigInterface })
  interfaces?: LinodeConfigInterface[];

  @SpeakeasyMetadata({ data: "json, name=kernel" })
  kernel?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=memory_limit" })
  memoryLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=root_device" })
  rootDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=run_level" })
  runLevel?: LinodeConfigRunLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=virt_mode" })
  virtMode?: LinodeConfigVirtModeEnum;
}


export class LinodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices: Devices;

  @SpeakeasyMetadata({ data: "json, name=helpers" })
  helpers?: LinodeConfigHelpers;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interfaces", elemType: LinodeConfigInterface })
  interfaces?: LinodeConfigInterface[];

  @SpeakeasyMetadata({ data: "json, name=kernel" })
  kernel?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=memory_limit" })
  memoryLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=root_device" })
  rootDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=run_level" })
  runLevel?: LinodeConfigRunLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=virt_mode" })
  virtMode?: LinodeConfigVirtModeEnum;
}
