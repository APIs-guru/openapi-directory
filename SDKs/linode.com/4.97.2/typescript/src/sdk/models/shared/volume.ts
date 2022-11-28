import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VolumeStatusEnum {
    Creating = "creating",
    Active = "active",
    Resizing = "resizing",
    ContactSupport = "contact_support"
}


// Volume
/** 
 * A Block Storage Volume associated with your Account.
 * 
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=filesystem_path" })
  filesystemPath?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=linode_label" })
  linodeLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VolumeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
