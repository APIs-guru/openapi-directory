import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameMatchCandidatesOut } from "./namematchcandidatesout";



export class BatchNameMatchCandidatesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namesAndMatchCandidates", elemType: NameMatchCandidatesOut })
  namesAndMatchCandidates?: NameMatchCandidatesOut[];
}
