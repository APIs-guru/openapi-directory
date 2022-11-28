import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaSetDefaultBranchRequest
/** 
 * Request message to set a specified branch as new default_branch.
**/
export class GoogleCloudRetailV2alphaSetDefaultBranchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchId" })
  branchId?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;
}
