import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare class RackType extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class RackWidth extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Rack extends SpeakeasyBase {
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    descUnits?: boolean;
    displayName?: string;
    facilityId?: string;
    group?: NestedRackGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    role?: NestedRackRole;
    serial?: string;
    site: NestedSite;
    tags?: string[];
    tenant?: NestedTenant;
    type?: RackType;
    uHeight?: number;
    width?: RackWidth;
}
