import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Information about a candidate running for elected office.
**/
export declare class Candidate extends SpeakeasyBase {
    candidateUrl?: string;
    channels?: Channel[];
    email?: string;
    name?: string;
    orderOnBallot?: string;
    party?: string;
    phone?: string;
    photoUrl?: string;
}
