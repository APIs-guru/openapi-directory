import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItemsTypeEnum {
    Raw = "raw"
,    Ext4 = "ext4"
}


// Items
/** 
 * The values to assign to each partition in this Node Pool's custom disk layout.
 * 
**/
export class Items extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: ItemsTypeEnum;
}
