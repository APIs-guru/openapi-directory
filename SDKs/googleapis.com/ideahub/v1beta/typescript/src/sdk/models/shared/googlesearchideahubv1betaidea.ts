import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaTopic } from "./googlesearchideahubv1betatopic";



// GoogleSearchIdeahubV1betaIdea
/** 
 * A single Idea that we want to show the end user.
**/
export class GoogleSearchIdeahubV1betaIdea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: GoogleSearchIdeahubV1betaTopic })
  topics?: GoogleSearchIdeahubV1betaTopic[];
}
