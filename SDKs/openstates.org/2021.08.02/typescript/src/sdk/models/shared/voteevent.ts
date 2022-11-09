import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VoteCount } from "./votecount";
import { Organization } from "./organization";
import { Link } from "./link";
import { PersonVote } from "./personvote";


export class VoteEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=counts", elemType: shared.VoteCount })
  counts: VoteCount[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=motion_classification" })
  motionClassification?: string[];

  @Metadata({ data: "json, name=motion_text" })
  motionText: string;

  @Metadata({ data: "json, name=organization" })
  organization: Organization;

  @Metadata({ data: "json, name=result" })
  result: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Link })
  sources: Link[];

  @Metadata({ data: "json, name=start_date" })
  startDate: string;

  @Metadata({ data: "json, name=votes", elemType: shared.PersonVote })
  votes: PersonVote[];
}
