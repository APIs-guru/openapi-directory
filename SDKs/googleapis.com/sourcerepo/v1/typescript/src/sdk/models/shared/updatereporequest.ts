import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repo } from "./repo";



// UpdateRepoRequest
/** 
 * Request for UpdateRepo.
**/
export class UpdateRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: Repo;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
