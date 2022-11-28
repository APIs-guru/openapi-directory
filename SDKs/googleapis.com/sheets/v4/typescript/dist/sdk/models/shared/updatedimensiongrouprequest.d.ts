import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
/**
 * Updates the state of the specified group.
**/
export declare class UpdateDimensionGroupRequest extends SpeakeasyBase {
    dimensionGroup?: DimensionGroup;
    fields?: string;
}
