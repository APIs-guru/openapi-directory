import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Channel
/** 
 * A social media or web channel for a candidate.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
