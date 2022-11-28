import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceType } from "./nesteddevicetype";
export declare class InterfaceTemplateFormFactor extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class InterfaceTemplate extends SpeakeasyBase {
    deviceType: NestedDeviceType;
    formFactor?: InterfaceTemplateFormFactor;
    id?: number;
    mgmtOnly?: boolean;
    name: string;
}
