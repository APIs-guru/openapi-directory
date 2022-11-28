import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1CustomAttributeValue } from "./googleappscloudidentitydevicesv1customattributevalue";


export enum GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum {
    ComplianceStateUnspecified = "COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum {
    HealthScoreUnspecified = "HEALTH_SCORE_UNSPECIFIED",
    VeryPoor = "VERY_POOR",
    Poor = "POOR",
    Neutral = "NEUTRAL",
    Good = "GOOD",
    VeryGood = "VERY_GOOD"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum {
    ManagedStateUnspecified = "MANAGED_STATE_UNSPECIFIED",
    Managed = "MANAGED",
    Unmanaged = "UNMANAGED"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum {
    OwnerTypeUnspecified = "OWNER_TYPE_UNSPECIFIED",
    OwnerTypeCustomer = "OWNER_TYPE_CUSTOMER",
    OwnerTypePartner = "OWNER_TYPE_PARTNER"
}


// GoogleAppsCloudidentityDevicesV1ClientState
/** 
 * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
**/
export class GoogleAppsCloudidentityDevicesV1ClientState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetTags" })
  assetTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=complianceState" })
  complianceState?: GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customId" })
  customId?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=healthScore" })
  healthScore?: GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum;

  @SpeakeasyMetadata({ data: "json, name=keyValuePairs", elemType: GoogleAppsCloudidentityDevicesV1CustomAttributeValue })
  keyValuePairs?: Map<string, GoogleAppsCloudidentityDevicesV1CustomAttributeValue>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=managed" })
  managed?: GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerType" })
  ownerType?: GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scoreReason" })
  scoreReason?: string;
}
