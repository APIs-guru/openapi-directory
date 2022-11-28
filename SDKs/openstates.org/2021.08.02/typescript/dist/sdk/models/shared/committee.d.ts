import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeClassificationEnum } from "./committeeclassificationenum";
import { Link } from "./link";
import { CommitteeMembership } from "./committeemembership";
import { AltName } from "./altname";
export declare class Committee extends SpeakeasyBase {
    classification: CommitteeClassificationEnum;
    extras: Map<string, any>;
    id: string;
    links?: Link[];
    memberships?: CommitteeMembership[];
    name: string;
    otherNames?: AltName[];
    parentId: string;
    sources?: Link[];
}
