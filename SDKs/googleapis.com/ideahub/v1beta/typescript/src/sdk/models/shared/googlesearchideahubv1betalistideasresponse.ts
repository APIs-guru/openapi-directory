import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1betaIdea } from "./googlesearchideahubv1betaidea";


export class GoogleSearchIdeahubV1betaListIdeasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ideas", elemType: shared.GoogleSearchIdeahubV1betaIdea })
  ideas?: GoogleSearchIdeahubV1betaIdea[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
