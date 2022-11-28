import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AndroidModelFormEnum {
    DeviceFormUnspecified = "DEVICE_FORM_UNSPECIFIED",
    Virtual = "VIRTUAL",
    Physical = "PHYSICAL",
    Emulator = "EMULATOR"
}
export declare enum AndroidModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}
/**
 * A description of an Android device tests may be run on.
**/
export declare class AndroidModel extends SpeakeasyBase {
    brand?: string;
    codename?: string;
    form?: AndroidModelFormEnum;
    formFactor?: AndroidModelFormFactorEnum;
    id?: string;
    lowFpsVideoRecording?: boolean;
    manufacturer?: string;
    name?: string;
    screenDensity?: number;
    screenX?: number;
    screenY?: number;
    supportedAbis?: string[];
    supportedVersionIds?: string[];
    tags?: string[];
    thumbnailUrl?: string;
}
