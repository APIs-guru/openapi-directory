import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaGetDefaultBranchResponse
/** 
 * Response message of CatalogService.GetDefaultBranch.
**/
export class GoogleCloudRetailV2alphaGetDefaultBranchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=setTime" })
  setTime?: string;
}
