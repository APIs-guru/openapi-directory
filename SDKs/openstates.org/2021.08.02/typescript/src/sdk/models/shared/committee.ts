import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitteeClassificationEnum } from "./committeeclassificationenum";
import { Link } from "./link";
import { CommitteeMembership } from "./committeemembership";
import { AltName } from "./altname";



export class Committee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: CommitteeClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: CommitteeMembership })
  memberships?: CommitteeMembership[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=other_names", elemType: AltName })
  otherNames?: AltName[];

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Link })
  sources?: Link[];
}
