import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";


export enum DeviceIpBlockFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}


// DeviceIpBlock
/** 
 * A single device IP block
**/
export class DeviceIpBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedDate" })
  addedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=block" })
  block?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: DeviceIpBlockFormEnum;
}
