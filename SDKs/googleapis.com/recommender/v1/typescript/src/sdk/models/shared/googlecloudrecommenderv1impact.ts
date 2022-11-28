import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1CostProjection } from "./googlecloudrecommenderv1costprojection";
import { GoogleCloudRecommenderV1ReliabilityProjection } from "./googlecloudrecommenderv1reliabilityprojection";
import { GoogleCloudRecommenderV1SecurityProjection } from "./googlecloudrecommenderv1securityprojection";
import { GoogleCloudRecommenderV1SustainabilityProjection } from "./googlecloudrecommenderv1sustainabilityprojection";


export enum GoogleCloudRecommenderV1ImpactCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}


// GoogleCloudRecommenderV1Impact
/** 
 * Contains the impact a recommendation can have for a given category.
**/
export class GoogleCloudRecommenderV1Impact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: GoogleCloudRecommenderV1ImpactCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=costProjection" })
  costProjection?: GoogleCloudRecommenderV1CostProjection;

  @SpeakeasyMetadata({ data: "json, name=reliabilityProjection" })
  reliabilityProjection?: GoogleCloudRecommenderV1ReliabilityProjection;

  @SpeakeasyMetadata({ data: "json, name=securityProjection" })
  securityProjection?: GoogleCloudRecommenderV1SecurityProjection;

  @SpeakeasyMetadata({ data: "json, name=sustainabilityProjection" })
  sustainabilityProjection?: GoogleCloudRecommenderV1SustainabilityProjection;
}
