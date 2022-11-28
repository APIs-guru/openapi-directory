import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NameMatchCandidateOut
/** 
 * The ordered list of name matching candidates
**/
export class NameMatchCandidateOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidateName" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=predScoreFamilyName" })
  predScoreFamilyName?: number;

  @SpeakeasyMetadata({ data: "json, name=predScoreGivenName" })
  predScoreGivenName?: number;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: number;
}
