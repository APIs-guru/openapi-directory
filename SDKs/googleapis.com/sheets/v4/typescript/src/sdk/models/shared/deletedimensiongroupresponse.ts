import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionGroup } from "./dimensiongroup";


// DeleteDimensionGroupResponse
/** 
 * The result of deleting a group.
**/
export class DeleteDimensionGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionGroups", elemType: shared.DimensionGroup })
  dimensionGroups?: DimensionGroup[];
}
