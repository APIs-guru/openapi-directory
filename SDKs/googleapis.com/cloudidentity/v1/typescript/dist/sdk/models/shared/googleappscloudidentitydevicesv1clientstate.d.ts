import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1CustomAttributeValue } from "./googleappscloudidentitydevicesv1customattributevalue";
export declare enum GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum {
    ComplianceStateUnspecified = "COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT"
}
export declare enum GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum {
    HealthScoreUnspecified = "HEALTH_SCORE_UNSPECIFIED",
    VeryPoor = "VERY_POOR",
    Poor = "POOR",
    Neutral = "NEUTRAL",
    Good = "GOOD",
    VeryGood = "VERY_GOOD"
}
export declare enum GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum {
    ManagedStateUnspecified = "MANAGED_STATE_UNSPECIFIED",
    Managed = "MANAGED",
    Unmanaged = "UNMANAGED"
}
export declare enum GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum {
    OwnerTypeUnspecified = "OWNER_TYPE_UNSPECIFIED",
    OwnerTypeCustomer = "OWNER_TYPE_CUSTOMER",
    OwnerTypePartner = "OWNER_TYPE_PARTNER"
}
/**
 * Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
**/
export declare class GoogleAppsCloudidentityDevicesV1ClientState extends SpeakeasyBase {
    assetTags?: string[];
    complianceState?: GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum;
    createTime?: string;
    customId?: string;
    etag?: string;
    healthScore?: GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum;
    keyValuePairs?: Map<string, GoogleAppsCloudidentityDevicesV1CustomAttributeValue>;
    lastUpdateTime?: string;
    managed?: GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum;
    name?: string;
    ownerType?: GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum;
    scoreReason?: string;
}
