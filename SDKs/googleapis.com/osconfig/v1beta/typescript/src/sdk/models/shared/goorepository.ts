import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooRepository
/** 
 * Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
**/
export class GooRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
