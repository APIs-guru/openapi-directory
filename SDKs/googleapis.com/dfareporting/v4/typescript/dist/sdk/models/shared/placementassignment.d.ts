import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Placement Assignment.
**/
export declare class PlacementAssignment extends SpeakeasyBase {
    active?: boolean;
    placementId?: string;
    placementIdDimensionValue?: DimensionValue;
    sslRequired?: boolean;
}
