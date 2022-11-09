import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceRepositoryResourceGooRepository
/** 
 * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
**/
export class OsPolicyResourceRepositoryResourceGooRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
