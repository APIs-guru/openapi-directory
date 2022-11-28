import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleSearchIdeahubV1betaTopic
/** 
 * Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
**/
export class GoogleSearchIdeahubV1betaTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
