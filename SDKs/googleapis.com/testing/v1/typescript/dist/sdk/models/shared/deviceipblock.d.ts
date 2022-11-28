import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum DeviceIpBlockFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}
/**
 * A single device IP block
**/
export declare class DeviceIpBlock extends SpeakeasyBase {
    addedDate?: Date;
    block?: string;
    form?: DeviceIpBlockFormEnum;
}
