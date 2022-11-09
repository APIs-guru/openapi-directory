import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommitteeClassificationEnum } from "./committeeclassificationenum";
import { Link } from "./link";
import { CommitteeMembership } from "./committeemembership";
import { AltName } from "./altname";
import { Link } from "./link";


export class Committee extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: CommitteeClassificationEnum;

  @Metadata({ data: "json, name=extras" })
  extras: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=memberships", elemType: shared.CommitteeMembership })
  memberships?: CommitteeMembership[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=other_names", elemType: shared.AltName })
  otherNames?: AltName[];

  @Metadata({ data: "json, name=parent_id" })
  parentId: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Link })
  sources?: Link[];
}
