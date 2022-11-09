import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";

export enum DeviceIpBlockFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED"
,    Virtual = "VIRTUAL"
,    Physical = "PHYSICAL"
,    Emulator = "EMULATOR"
}


// DeviceIpBlock
/** 
 * A single device IP block
**/
export class DeviceIpBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedDate" })
  addedDate?: Date;

  @Metadata({ data: "json, name=block" })
  block?: string;

  @Metadata({ data: "json, name=form" })
  form?: DeviceIpBlockFormEnum;
}
