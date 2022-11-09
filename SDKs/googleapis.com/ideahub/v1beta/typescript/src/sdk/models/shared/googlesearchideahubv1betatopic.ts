import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSearchIdeahubV1betaTopic
/** 
 * Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
**/
export class GoogleSearchIdeahubV1betaTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
