import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum {
    RiskTypeUnspecified = "RISK_TYPE_UNSPECIFIED",
    ServiceDisruption = "SERVICE_DISRUPTION",
    DataLoss = "DATA_LOSS",
    AccessDeny = "ACCESS_DENY"
}
/**
 * Contains information on the impact of a reliability recommendation.
**/
export declare class GoogleCloudRecommenderV1beta1ReliabilityProjection extends SpeakeasyBase {
    details?: Map<string, any>;
    risks?: GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum[];
}
