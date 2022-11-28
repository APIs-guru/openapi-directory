import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserAdServerConfig } from "./advertiseradserverconfig";
import { AdvertiserBillingConfig } from "./advertiserbillingconfig";
import { AdvertiserCreativeConfig } from "./advertisercreativeconfig";
import { AdvertiserDataAccessConfig } from "./advertiserdataaccessconfig";
import { AdvertiserGeneralConfig } from "./advertisergeneralconfig";
import { IntegrationDetails } from "./integrationdetails";
import { AdvertiserTargetingConfig } from "./advertisertargetingconfig";
import { AdvertiserGeneralConfigInput } from "./advertisergeneralconfig";
export declare enum AdvertiserEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single advertiser in Display & Video 360 (DV360).
**/
export declare class Advertiser extends SpeakeasyBase {
    adServerConfig?: AdvertiserAdServerConfig;
    advertiserId?: string;
    billingConfig?: AdvertiserBillingConfig;
    creativeConfig?: AdvertiserCreativeConfig;
    dataAccessConfig?: AdvertiserDataAccessConfig;
    displayName?: string;
    entityStatus?: AdvertiserEntityStatusEnum;
    generalConfig?: AdvertiserGeneralConfig;
    integrationDetails?: IntegrationDetails;
    name?: string;
    partnerId?: string;
    prismaEnabled?: boolean;
    servingConfig?: AdvertiserTargetingConfig;
    updateTime?: string;
}
/**
 * A single advertiser in Display & Video 360 (DV360).
**/
export declare class AdvertiserInput extends SpeakeasyBase {
    adServerConfig?: AdvertiserAdServerConfig;
    billingConfig?: AdvertiserBillingConfig;
    creativeConfig?: AdvertiserCreativeConfig;
    dataAccessConfig?: AdvertiserDataAccessConfig;
    displayName?: string;
    entityStatus?: AdvertiserEntityStatusEnum;
    generalConfig?: AdvertiserGeneralConfigInput;
    integrationDetails?: IntegrationDetails;
    partnerId?: string;
    prismaEnabled?: boolean;
    servingConfig?: AdvertiserTargetingConfig;
}
