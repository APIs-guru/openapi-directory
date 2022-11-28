import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1OperationGroup } from "./googlecloudrecommenderv1beta1operationgroup";



// GoogleCloudRecommenderV1beta1RecommendationContent
/** 
 * Contains what resources are changing and how they are changing.
**/
export class GoogleCloudRecommenderV1beta1RecommendationContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationGroups", elemType: GoogleCloudRecommenderV1beta1OperationGroup })
  operationGroups?: GoogleCloudRecommenderV1beta1OperationGroup[];

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: Map<string, any>;
}
