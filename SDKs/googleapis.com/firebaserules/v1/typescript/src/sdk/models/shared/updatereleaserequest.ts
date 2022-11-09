import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Release } from "./release";


// UpdateReleaseRequest
/** 
 * The request for FirebaseRulesService.UpdateRelease.
**/
export class UpdateReleaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=release" })
  release?: Release;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
