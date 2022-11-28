import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum {
    RiskTypeUnspecified = "RISK_TYPE_UNSPECIFIED",
    ServiceDisruption = "SERVICE_DISRUPTION",
    DataLoss = "DATA_LOSS",
    AccessDeny = "ACCESS_DENY"
}


// GoogleCloudRecommenderV1beta1ReliabilityProjection
/** 
 * Contains information on the impact of a reliability recommendation.
**/
export class GoogleCloudRecommenderV1beta1ReliabilityProjection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=risks" })
  risks?: GoogleCloudRecommenderV1beta1ReliabilityProjectionRisksEnum[];
}
