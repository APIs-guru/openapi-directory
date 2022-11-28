import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class Platform extends SpeakeasyBase {
    description?: string;
    deviceCount?: number;
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    napalmArgs?: string;
    napalmDriver?: string;
    slug: string;
    virtualmachineCount?: number;
}
