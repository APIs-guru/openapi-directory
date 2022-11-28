import { SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";
export declare class CommitteeMembership extends SpeakeasyBase {
    person?: CompactPerson;
    personName: string;
    role: string;
}
