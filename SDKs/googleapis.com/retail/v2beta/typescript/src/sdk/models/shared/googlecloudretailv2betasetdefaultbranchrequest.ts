import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaSetDefaultBranchRequest
/** 
 * Request message to set a specified branch as new default_branch.
**/
export class GoogleCloudRetailV2betaSetDefaultBranchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchId" })
  branchId?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=note" })
  note?: string;
}
