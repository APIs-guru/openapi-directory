import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class DeviceTypeInterfaceOrdering extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceTypeSubdeviceRole extends SpeakeasyBase {
    label: string;
    value: boolean;
}
export declare class DeviceType extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    id?: number;
    instanceCount?: number;
    interfaceOrdering?: DeviceTypeInterfaceOrdering;
    isConsoleServer?: boolean;
    isFullDepth?: boolean;
    isNetworkDevice?: boolean;
    isPdu?: boolean;
    lastUpdated?: Date;
    manufacturer: NestedManufacturer;
    model: string;
    partNumber?: string;
    slug: string;
    subdeviceRole?: DeviceTypeSubdeviceRole;
    tags?: string[];
    uHeight?: number;
}
