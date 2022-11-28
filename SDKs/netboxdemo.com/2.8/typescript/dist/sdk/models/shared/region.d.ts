import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRegion } from "./nestedregion";
export declare class Region extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    parent?: NestedRegion;
    siteCount?: number;
    slug: string;
}
