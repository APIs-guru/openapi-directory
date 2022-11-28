import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";



// Candidate
/** 
 * Information about a candidate running for elected office.
**/
export class Candidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidateUrl" })
  candidateUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel })
  channels?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orderOnBallot" })
  orderOnBallot?: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=photoUrl" })
  photoUrl?: string;
}
