import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedSite } from "./nestedsite";
export declare class RackGroup extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    parent?: NestedRackGroup;
    rackCount?: number;
    site: NestedSite;
    slug: string;
}
