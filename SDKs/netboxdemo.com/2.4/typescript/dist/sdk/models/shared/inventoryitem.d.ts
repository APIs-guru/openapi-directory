import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class InventoryItem extends SpeakeasyBase {
    assetTag?: string;
    description?: string;
    device: NestedDevice;
    discovered?: boolean;
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    parent?: number;
    partId?: string;
    serial?: string;
    tags?: string[];
}
