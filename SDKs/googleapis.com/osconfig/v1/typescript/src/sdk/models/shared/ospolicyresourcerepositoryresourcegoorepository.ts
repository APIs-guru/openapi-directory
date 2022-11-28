import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourceRepositoryResourceGooRepository
/** 
 * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
**/
export class OsPolicyResourceRepositoryResourceGooRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
