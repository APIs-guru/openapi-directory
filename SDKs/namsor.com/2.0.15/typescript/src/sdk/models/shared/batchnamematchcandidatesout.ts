import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameMatchCandidatesOut } from "./namematchcandidatesout";


export class BatchNameMatchCandidatesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=namesAndMatchCandidates", elemType: shared.NameMatchCandidatesOut })
  namesAndMatchCandidates?: NameMatchCandidatesOut[];
}
