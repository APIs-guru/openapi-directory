import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommenderV1beta1CostProjection } from "./googlecloudrecommenderv1beta1costprojection";
import { GoogleCloudRecommenderV1beta1ReliabilityProjection } from "./googlecloudrecommenderv1beta1reliabilityprojection";
import { GoogleCloudRecommenderV1beta1SecurityProjection } from "./googlecloudrecommenderv1beta1securityprojection";
import { GoogleCloudRecommenderV1beta1SustainabilityProjection } from "./googlecloudrecommenderv1beta1sustainabilityprojection";

export enum GoogleCloudRecommenderV1beta1ImpactCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Cost = "COST"
,    Security = "SECURITY"
,    Performance = "PERFORMANCE"
,    Manageability = "MANAGEABILITY"
,    Sustainability = "SUSTAINABILITY"
,    Reliability = "RELIABILITY"
}


// GoogleCloudRecommenderV1beta1Impact
/** 
 * Contains the impact a recommendation can have for a given category.
**/
export class GoogleCloudRecommenderV1beta1Impact extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: GoogleCloudRecommenderV1beta1ImpactCategoryEnum;

  @Metadata({ data: "json, name=costProjection" })
  costProjection?: GoogleCloudRecommenderV1beta1CostProjection;

  @Metadata({ data: "json, name=reliabilityProjection" })
  reliabilityProjection?: GoogleCloudRecommenderV1beta1ReliabilityProjection;

  @Metadata({ data: "json, name=securityProjection" })
  securityProjection?: GoogleCloudRecommenderV1beta1SecurityProjection;

  @Metadata({ data: "json, name=sustainabilityProjection" })
  sustainabilityProjection?: GoogleCloudRecommenderV1beta1SustainabilityProjection;
}
