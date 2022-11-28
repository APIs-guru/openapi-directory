import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IosModelFormFactorEnum {
    DeviceFormFactorUnspecified = "DEVICE_FORM_FACTOR_UNSPECIFIED",
    Phone = "PHONE",
    Tablet = "TABLET",
    Wearable = "WEARABLE"
}
/**
 * A description of an iOS device tests may be run on.
**/
export declare class IosModel extends SpeakeasyBase {
    deviceCapabilities?: string[];
    formFactor?: IosModelFormFactorEnum;
    id?: string;
    name?: string;
    screenDensity?: number;
    screenX?: number;
    screenY?: number;
    supportedVersionIds?: string[];
    tags?: string[];
}
