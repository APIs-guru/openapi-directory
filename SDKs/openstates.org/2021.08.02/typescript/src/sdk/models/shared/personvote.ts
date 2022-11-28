import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";



export class PersonVote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option: string;

  @SpeakeasyMetadata({ data: "json, name=voter" })
  voter?: CompactPerson;

  @SpeakeasyMetadata({ data: "json, name=voter_name" })
  voterName: string;
}
