import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooRepository
/** 
 * Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
**/
export class GooRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
