import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompactPerson } from "./compactperson";


export class CommitteeMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: CompactPerson;

  @Metadata({ data: "json, name=person_name" })
  personName: string;

  @Metadata({ data: "json, name=role" })
  role: string;
}
