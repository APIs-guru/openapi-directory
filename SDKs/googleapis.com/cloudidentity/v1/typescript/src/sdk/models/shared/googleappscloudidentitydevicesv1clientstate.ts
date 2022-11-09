import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCloudidentityDevicesV1CustomAttributeValue } from "./googleappscloudidentitydevicesv1customattributevalue";

export enum GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum {
    ComplianceStateUnspecified = "COMPLIANCE_STATE_UNSPECIFIED"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum {
    HealthScoreUnspecified = "HEALTH_SCORE_UNSPECIFIED"
,    VeryPoor = "VERY_POOR"
,    Poor = "POOR"
,    Neutral = "NEUTRAL"
,    Good = "GOOD"
,    VeryGood = "VERY_GOOD"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum {
    ManagedStateUnspecified = "MANAGED_STATE_UNSPECIFIED"
,    Managed = "MANAGED"
,    Unmanaged = "UNMANAGED"
}

export enum GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum {
    OwnerTypeUnspecified = "OWNER_TYPE_UNSPECIFIED"
,    OwnerTypeCustomer = "OWNER_TYPE_CUSTOMER"
,    OwnerTypePartner = "OWNER_TYPE_PARTNER"
}


// GoogleAppsCloudidentityDevicesV1ClientState
/** 
 * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
**/
export class GoogleAppsCloudidentityDevicesV1ClientState extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetTags" })
  assetTags?: string[];

  @Metadata({ data: "json, name=complianceState" })
  complianceState?: GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=customId" })
  customId?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=healthScore" })
  healthScore?: GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum;

  @Metadata({ data: "json, name=keyValuePairs", elemType: shared.GoogleAppsCloudidentityDevicesV1CustomAttributeValue })
  keyValuePairs?: Map<string, GoogleAppsCloudidentityDevicesV1CustomAttributeValue>;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=managed" })
  managed?: GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerType" })
  ownerType?: GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum;

  @Metadata({ data: "json, name=scoreReason" })
  scoreReason?: string;
}
