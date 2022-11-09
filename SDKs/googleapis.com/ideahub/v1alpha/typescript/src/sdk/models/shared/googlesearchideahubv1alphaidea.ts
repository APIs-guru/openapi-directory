import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1alphaTopic } from "./googlesearchideahubv1alphatopic";


// GoogleSearchIdeahubV1alphaIdea
/** 
 * A single Idea that we want to show the end user.
**/
export class GoogleSearchIdeahubV1alphaIdea extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topics", elemType: shared.GoogleSearchIdeahubV1alphaTopic })
  topics?: GoogleSearchIdeahubV1alphaTopic[];
}
