import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2GetDefaultBranchResponse
/** 
 * Response message of CatalogService.GetDefaultBranch.
**/
export class GoogleCloudRetailV2GetDefaultBranchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=setTime" })
  setTime?: string;
}
