import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableDeviceTypeInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Map<string, any>;
    interfaceOrdering?: number;
    isConsoleServer?: boolean;
    isFullDepth?: boolean;
    isNetworkDevice?: boolean;
    isPdu?: boolean;
    manufacturer: number;
    model: string;
    partNumber?: string;
    slug: string;
    subdeviceRole?: boolean;
    tags?: string[];
    uHeight?: number;
}
