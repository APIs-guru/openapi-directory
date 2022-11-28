import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedSite } from "./nestedsite";
export declare class PowerPanel extends SpeakeasyBase {
    id?: number;
    name: string;
    powerfeedCount?: number;
    rackGroup?: NestedRackGroup;
    site: NestedSite;
}
