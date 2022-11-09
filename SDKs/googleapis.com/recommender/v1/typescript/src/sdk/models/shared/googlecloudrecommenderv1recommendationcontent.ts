import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1OperationGroup } from "./googlecloudrecommenderv1operationgroup";


// GoogleCloudRecommenderV1RecommendationContent
/** 
 * Contains what resources are changing and how they are changing.
**/
export class GoogleCloudRecommenderV1RecommendationContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=operationGroups", elemType: shared.GoogleCloudRecommenderV1OperationGroup })
  operationGroups?: GoogleCloudRecommenderV1OperationGroup[];

  @Metadata({ data: "json, name=overview" })
  overview?: Map<string, any>;
}
