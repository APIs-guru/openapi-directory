import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameMatchCandidateOut } from "./namematchcandidateout";


// NameMatchCandidatesOut
/** 
 * Classified matched names
**/
export class NameMatchCandidatesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=matchCandidates", elemType: shared.NameMatchCandidateOut })
  matchCandidates?: NameMatchCandidateOut[];

  @Metadata({ data: "json, name=orderOption" })
  orderOption?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
