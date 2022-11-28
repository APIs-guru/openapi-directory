import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableDeviceTypeParentChildStatusEnum {
    Parent = "parent",
    Child = "child"
}
export declare class WritableDeviceTypeInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Map<string, any>;
    isFullDepth?: boolean;
    manufacturer: number;
    model: string;
    partNumber?: string;
    slug: string;
    subdeviceRole?: WritableDeviceTypeParentChildStatusEnum;
    tags?: string[];
    uHeight?: number;
}
