import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BranchModel } from "./branchmodel";



// BranchModelResults
/** 
 * Holds results from a paged query returning BranchModel values
**/
export class BranchModelResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Data", elemType: BranchModel })
  data?: BranchModel[];
}
