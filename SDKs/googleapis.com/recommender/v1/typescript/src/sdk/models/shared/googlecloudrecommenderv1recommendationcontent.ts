import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1OperationGroup } from "./googlecloudrecommenderv1operationgroup";



// GoogleCloudRecommenderV1RecommendationContent
/** 
 * Contains what resources are changing and how they are changing.
**/
export class GoogleCloudRecommenderV1RecommendationContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationGroups", elemType: GoogleCloudRecommenderV1OperationGroup })
  operationGroups?: GoogleCloudRecommenderV1OperationGroup[];

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: Map<string, any>;
}
