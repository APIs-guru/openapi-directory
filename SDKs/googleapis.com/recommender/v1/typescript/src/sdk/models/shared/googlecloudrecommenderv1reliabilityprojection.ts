import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum {
    RiskTypeUnspecified = "RISK_TYPE_UNSPECIFIED",
    ServiceDisruption = "SERVICE_DISRUPTION",
    DataLoss = "DATA_LOSS",
    AccessDeny = "ACCESS_DENY"
}


// GoogleCloudRecommenderV1ReliabilityProjection
/** 
 * Contains information on the impact of a reliability recommendation.
**/
export class GoogleCloudRecommenderV1ReliabilityProjection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=risks" })
  risks?: GoogleCloudRecommenderV1ReliabilityProjectionRisksEnum[];
}
