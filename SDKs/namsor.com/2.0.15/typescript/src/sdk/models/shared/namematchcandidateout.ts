import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NameMatchCandidateOut
/** 
 * The ordered list of name matching candidates
**/
export class NameMatchCandidateOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidateName" })
  candidateName?: string;

  @Metadata({ data: "json, name=predScoreFamilyName" })
  predScoreFamilyName?: number;

  @Metadata({ data: "json, name=predScoreGivenName" })
  predScoreGivenName?: number;

  @Metadata({ data: "json, name=probability" })
  probability?: number;
}
