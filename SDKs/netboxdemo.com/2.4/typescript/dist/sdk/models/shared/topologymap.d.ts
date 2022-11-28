import { SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";
export declare class TopologyMap extends SpeakeasyBase {
    description?: string;
    devicePatterns: string;
    id?: number;
    name: string;
    site: NestedSite;
    slug: string;
}
