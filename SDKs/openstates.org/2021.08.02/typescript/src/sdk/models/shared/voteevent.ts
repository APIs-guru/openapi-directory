import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VoteCount } from "./votecount";
import { Organization } from "./organization";
import { Link } from "./link";
import { PersonVote } from "./personvote";



export class VoteEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=counts", elemType: VoteCount })
  counts: VoteCount[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=motion_classification" })
  motionClassification?: string[];

  @SpeakeasyMetadata({ data: "json, name=motion_text" })
  motionText: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: Organization;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Link })
  sources: Link[];

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=votes", elemType: PersonVote })
  votes: PersonVote[];
}
