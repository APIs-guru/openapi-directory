import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Repo } from "./repo";


// UpdateRepoRequest
/** 
 * Request for UpdateRepo.
**/
export class UpdateRepoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=repo" })
  repo?: Repo;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
