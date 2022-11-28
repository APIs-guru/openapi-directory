import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiskFilesystemEnum {
    Raw = "raw",
    Swap = "swap",
    Ext3 = "ext3",
    Ext4 = "ext4",
    Initrd = "initrd"
}

export enum DiskStatusEnum {
    Ready = "ready",
    NotReady = "not ready",
    Deleting = "deleting"
}


export class DiskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filesystem" })
  filesystem?: DiskFilesystemEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=filesystem" })
  filesystem?: DiskFilesystemEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DiskStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
