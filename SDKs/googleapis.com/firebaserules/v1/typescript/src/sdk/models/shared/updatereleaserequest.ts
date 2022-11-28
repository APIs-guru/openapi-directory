import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReleaseInput } from "./release";



// UpdateReleaseRequestInput
/** 
 * The request for FirebaseRulesService.UpdateRelease.
**/
export class UpdateReleaseRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: ReleaseInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
