import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";



export class CommitteeMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: CompactPerson;

  @SpeakeasyMetadata({ data: "json, name=person_name" })
  personName: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;
}
