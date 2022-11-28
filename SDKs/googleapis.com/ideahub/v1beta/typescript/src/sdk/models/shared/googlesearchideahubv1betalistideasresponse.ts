import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaIdea } from "./googlesearchideahubv1betaidea";



export class GoogleSearchIdeahubV1betaListIdeasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ideas", elemType: GoogleSearchIdeahubV1betaIdea })
  ideas?: GoogleSearchIdeahubV1betaIdea[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
