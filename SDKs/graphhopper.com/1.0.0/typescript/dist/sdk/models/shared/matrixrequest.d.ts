import { SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";
export declare class MatrixRequest extends SpeakeasyBase {
    failFast?: boolean;
    fromCurbsides?: string[];
    fromPointHints?: string[];
    fromPoints?: number[][];
    outArrays?: string[];
    snapPreventions?: string[];
    toCurbsides?: string[];
    toPointHints?: string[];
    toPoints?: number[][];
    turnCosts?: boolean;
    vehicle?: VehicleProfileIdEnum;
}
