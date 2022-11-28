import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderInfo } from "./httpheaderinfo";
export declare class DeviceIdentification extends SpeakeasyBase {
    friendlyName?: string;
    headers?: HttpHeaderInfo[];
    manufacturer?: string;
    manufacturerUrl?: string;
    modelDescription?: string;
    modelName?: string;
    modelNumber?: string;
    modelUrl?: string;
    serialNumber?: string;
}
