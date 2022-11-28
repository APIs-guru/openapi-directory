import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaGetDefaultBranchResponse
/** 
 * Response message of CatalogService.GetDefaultBranch.
**/
export class GoogleCloudRetailV2betaGetDefaultBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=setTime" })
  setTime?: string;
}
