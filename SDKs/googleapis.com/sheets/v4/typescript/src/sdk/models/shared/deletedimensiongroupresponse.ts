import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";



// DeleteDimensionGroupResponse
/** 
 * The result of deleting a group.
**/
export class DeleteDimensionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionGroups", elemType: DimensionGroup })
  dimensionGroups?: DimensionGroup[];
}
