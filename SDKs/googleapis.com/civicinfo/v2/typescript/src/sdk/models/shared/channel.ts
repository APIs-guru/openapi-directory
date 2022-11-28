import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Channel
/** 
 * A social media or web channel for a candidate.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
