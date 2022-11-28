import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRack } from "./nestedrack";
import { NestedTenant } from "./nestedtenant";
import { NestedUser } from "./nesteduser";
export declare class RackReservation extends SpeakeasyBase {
    created?: Date;
    description: string;
    id?: number;
    rack: NestedRack;
    tenant?: NestedTenant;
    units: number[];
    user: NestedUser;
}
