import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionGroup } from "./dimensiongroup";


// UpdateDimensionGroupRequest
/** 
 * Updates the state of the specified group.
**/
export class UpdateDimensionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionGroup" })
  dimensionGroup?: DimensionGroup;

  @Metadata({ data: "json, name=fields" })
  fields?: string;
}
