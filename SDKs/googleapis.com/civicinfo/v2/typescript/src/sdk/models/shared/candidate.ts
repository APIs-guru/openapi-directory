import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";


// Candidate
/** 
 * Information about a candidate running for elected office.
**/
export class Candidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidateUrl" })
  candidateUrl?: string;

  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orderOnBallot" })
  orderOnBallot?: string;

  @Metadata({ data: "json, name=party" })
  party?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=photoUrl" })
  photoUrl?: string;
}
