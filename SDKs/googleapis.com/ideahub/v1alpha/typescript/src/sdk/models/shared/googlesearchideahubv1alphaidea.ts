import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaTopic } from "./googlesearchideahubv1alphatopic";



// GoogleSearchIdeahubV1alphaIdea
/** 
 * A single Idea that we want to show the end user.
**/
export class GoogleSearchIdeahubV1alphaIdea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: GoogleSearchIdeahubV1alphaTopic })
  topics?: GoogleSearchIdeahubV1alphaTopic[];
}
