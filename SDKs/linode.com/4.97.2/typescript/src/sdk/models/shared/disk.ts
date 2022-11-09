import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiskFilesystemEnum {
    Raw = "raw"
,    Swap = "swap"
,    Ext3 = "ext3"
,    Ext4 = "ext4"
,    Initrd = "initrd"
}

export enum DiskStatusEnum {
    Ready = "ready"
,    NotReady = "not ready"
,    Deleting = "deleting"
}


export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=filesystem" })
  filesystem?: DiskFilesystemEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status?: DiskStatusEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
