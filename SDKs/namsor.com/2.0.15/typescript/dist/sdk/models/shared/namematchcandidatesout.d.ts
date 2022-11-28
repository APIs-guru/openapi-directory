import { SpeakeasyBase } from "../../../internal/utils";
import { NameMatchCandidateOut } from "./namematchcandidateout";
/**
 * Classified matched names
**/
export declare class NameMatchCandidatesOut extends SpeakeasyBase {
    firstName?: string;
    id?: string;
    lastName?: string;
    matchCandidates?: NameMatchCandidateOut[];
    orderOption?: string;
    script?: string;
}
