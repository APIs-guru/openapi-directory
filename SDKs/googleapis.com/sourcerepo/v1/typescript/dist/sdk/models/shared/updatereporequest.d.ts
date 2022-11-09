import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Repo } from "./repo";
/**
 * Request for UpdateRepo.
**/
export declare class UpdateRepoRequest extends SpeakeasyBase {
    repo?: Repo;
    updateMask?: string;
}
