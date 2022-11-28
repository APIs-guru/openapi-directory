import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeliverInfoTargetEnum {
    TargetUnspecified = "TARGET_UNSPECIFIED",
    Instance = "INSTANCE",
    Internet = "INTERNET",
    GoogleApi = "GOOGLE_API",
    GkeMaster = "GKE_MASTER",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    PscPublishedService = "PSC_PUBLISHED_SERVICE",
    PscGoogleApi = "PSC_GOOGLE_API",
    PscVpcSc = "PSC_VPC_SC"
}


// DeliverInfo
/** 
 * Details of the final state "deliver" and associated resource.
**/
export class DeliverInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: DeliverInfoTargetEnum;
}
