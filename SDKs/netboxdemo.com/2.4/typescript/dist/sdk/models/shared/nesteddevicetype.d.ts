import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class NestedDeviceType extends SpeakeasyBase {
    id?: number;
    manufacturer?: NestedManufacturer;
    model: string;
    slug: string;
    url?: string;
}
