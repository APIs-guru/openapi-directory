import { SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";
export declare class SymmetricalMatrixRequest extends SpeakeasyBase {
    curbsides?: string[];
    failFast?: boolean;
    outArrays?: string[];
    pointHints?: string[];
    points?: number[][];
    snapPreventions?: string[];
    turnCosts?: boolean;
    vehicle?: VehicleProfileIdEnum;
}
