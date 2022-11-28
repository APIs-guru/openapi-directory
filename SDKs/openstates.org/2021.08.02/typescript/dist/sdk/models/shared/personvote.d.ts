import { SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";
export declare class PersonVote extends SpeakeasyBase {
    option: string;
    voter?: CompactPerson;
    voterName: string;
}
