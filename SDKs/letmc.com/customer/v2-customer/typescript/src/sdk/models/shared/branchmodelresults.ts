import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BranchModel } from "./branchmodel";


// BranchModelResults
/** 
 * Holds results from a paged query returning BranchModel values
**/
export class BranchModelResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Data", elemType: shared.BranchModel })
  data?: BranchModel[];
}
