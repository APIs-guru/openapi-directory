import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameMatchCandidateOut } from "./namematchcandidateout";



// NameMatchCandidatesOut
/** 
 * Classified matched names
**/
export class NameMatchCandidatesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=matchCandidates", elemType: NameMatchCandidateOut })
  matchCandidates?: NameMatchCandidateOut[];

  @SpeakeasyMetadata({ data: "json, name=orderOption" })
  orderOption?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
