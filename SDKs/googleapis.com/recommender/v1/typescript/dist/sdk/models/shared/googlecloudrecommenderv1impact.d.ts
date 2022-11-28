import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1CostProjection } from "./googlecloudrecommenderv1costprojection";
import { GoogleCloudRecommenderV1ReliabilityProjection } from "./googlecloudrecommenderv1reliabilityprojection";
import { GoogleCloudRecommenderV1SecurityProjection } from "./googlecloudrecommenderv1securityprojection";
import { GoogleCloudRecommenderV1SustainabilityProjection } from "./googlecloudrecommenderv1sustainabilityprojection";
export declare enum GoogleCloudRecommenderV1ImpactCategoryEnum {
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
export declare class GoogleCloudRecommenderV1Impact extends SpeakeasyBase {
    category?: GoogleCloudRecommenderV1ImpactCategoryEnum;
    costProjection?: GoogleCloudRecommenderV1CostProjection;
    reliabilityProjection?: GoogleCloudRecommenderV1ReliabilityProjection;
    securityProjection?: GoogleCloudRecommenderV1SecurityProjection;
    sustainabilityProjection?: GoogleCloudRecommenderV1SustainabilityProjection;
}
