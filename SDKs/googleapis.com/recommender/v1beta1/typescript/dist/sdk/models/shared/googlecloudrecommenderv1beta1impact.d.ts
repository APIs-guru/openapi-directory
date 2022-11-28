import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1CostProjection } from "./googlecloudrecommenderv1beta1costprojection";
import { GoogleCloudRecommenderV1beta1ReliabilityProjection } from "./googlecloudrecommenderv1beta1reliabilityprojection";
import { GoogleCloudRecommenderV1beta1SecurityProjection } from "./googlecloudrecommenderv1beta1securityprojection";
import { GoogleCloudRecommenderV1beta1SustainabilityProjection } from "./googlecloudrecommenderv1beta1sustainabilityprojection";
export declare enum GoogleCloudRecommenderV1beta1ImpactCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}
/**
 * Contains the impact a recommendation can have for a given category.
**/
export declare class GoogleCloudRecommenderV1beta1Impact extends SpeakeasyBase {
    category?: GoogleCloudRecommenderV1beta1ImpactCategoryEnum;
    costProjection?: GoogleCloudRecommenderV1beta1CostProjection;
    reliabilityProjection?: GoogleCloudRecommenderV1beta1ReliabilityProjection;
    securityProjection?: GoogleCloudRecommenderV1beta1SecurityProjection;
    sustainabilityProjection?: GoogleCloudRecommenderV1beta1SustainabilityProjection;
}
