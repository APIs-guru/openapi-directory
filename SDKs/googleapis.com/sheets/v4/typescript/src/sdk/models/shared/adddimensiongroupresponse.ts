import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionGroup } from "./dimensiongroup";


// AddDimensionGroupResponse
/** 
 * The result of adding a group.
**/
export class AddDimensionGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionGroups", elemType: shared.DimensionGroup })
  dimensionGroups?: DimensionGroup[];
}
