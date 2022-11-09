import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VolumeStatusEnum {
    Creating = "creating"
,    Active = "active"
,    Resizing = "resizing"
,    ContactSupport = "contact_support"
}


// Volume
/** 
 * A Block Storage Volume associated with your Account.
 * 
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=filesystem_path" })
  filesystemPath?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @Metadata({ data: "json, name=linode_label" })
  linodeLabel?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status?: VolumeStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
