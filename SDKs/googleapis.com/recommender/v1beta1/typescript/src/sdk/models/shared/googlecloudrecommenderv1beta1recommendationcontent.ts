import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1beta1OperationGroup } from "./googlecloudrecommenderv1beta1operationgroup";


// GoogleCloudRecommenderV1beta1RecommendationContent
/** 
 * Contains what resources are changing and how they are changing.
**/
export class GoogleCloudRecommenderV1beta1RecommendationContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationGroups", elemType: shared.GoogleCloudRecommenderV1beta1OperationGroup })
  operationGroups?: GoogleCloudRecommenderV1beta1OperationGroup[];

  @Metadata({ data: "json, name=overview" })
  overview?: Map<string, any>;
}
