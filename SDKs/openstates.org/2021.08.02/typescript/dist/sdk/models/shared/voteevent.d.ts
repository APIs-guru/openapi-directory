import { SpeakeasyBase } from "../../../internal/utils";
import { VoteCount } from "./votecount";
import { Organization } from "./organization";
import { Link } from "./link";
import { PersonVote } from "./personvote";
export declare class VoteEvent extends SpeakeasyBase {
    counts: VoteCount[];
    id: string;
    identifier: string;
    motionClassification?: string[];
    motionText: string;
    organization: Organization;
    result: string;
    sources: Link[];
    startDate: string;
    votes: PersonVote[];
}
