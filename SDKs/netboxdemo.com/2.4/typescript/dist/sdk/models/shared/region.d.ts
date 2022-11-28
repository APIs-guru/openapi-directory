import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";
export declare class Region extends SpeakeasyBase {
    id?: number;
    name: string;
    parent?: NestedRegion;
    slug: string;
}
