import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1betaTopic } from "./googlesearchideahubv1betatopic";


// GoogleSearchIdeahubV1betaIdea
/** 
 * A single Idea that we want to show the end user.
**/
export class GoogleSearchIdeahubV1betaIdea extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topics", elemType: shared.GoogleSearchIdeahubV1betaTopic })
  topics?: GoogleSearchIdeahubV1betaTopic[];
}
