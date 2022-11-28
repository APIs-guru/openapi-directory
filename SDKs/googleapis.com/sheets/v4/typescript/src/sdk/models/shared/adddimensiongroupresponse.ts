import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";



// AddDimensionGroupResponse
/** 
 * The result of adding a group.
**/
export class AddDimensionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionGroups", elemType: DimensionGroup })
  dimensionGroups?: DimensionGroup[];
}
