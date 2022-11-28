import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ordered list of name matching candidates
**/
export declare class NameMatchCandidateOut extends SpeakeasyBase {
    candidateName?: string;
    predScoreFamilyName?: number;
    predScoreGivenName?: number;
    probability?: number;
}
