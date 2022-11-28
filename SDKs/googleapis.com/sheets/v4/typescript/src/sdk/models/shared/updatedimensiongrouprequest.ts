import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";



// UpdateDimensionGroupRequest
/** 
 * Updates the state of the specified group.
**/
export class UpdateDimensionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionGroup" })
  dimensionGroup?: DimensionGroup;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;
}
