import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaIdea } from "./googlesearchideahubv1alphaidea";



export class GoogleSearchIdeahubV1alphaListIdeasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ideas", elemType: GoogleSearchIdeahubV1alphaIdea })
  ideas?: GoogleSearchIdeahubV1alphaIdea[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
