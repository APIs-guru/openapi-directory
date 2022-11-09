import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompactPerson } from "./compactperson";


export class PersonVote extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option: string;

  @Metadata({ data: "json, name=voter" })
  voter?: CompactPerson;

  @Metadata({ data: "json, name=voter_name" })
  voterName: string;
}
