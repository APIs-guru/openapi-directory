import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1alphaIdea } from "./googlesearchideahubv1alphaidea";


export class GoogleSearchIdeahubV1alphaListIdeasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ideas", elemType: shared.GoogleSearchIdeahubV1alphaIdea })
  ideas?: GoogleSearchIdeahubV1alphaIdea[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
