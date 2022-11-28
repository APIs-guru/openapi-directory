import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserAdServerConfig } from "./advertiseradserverconfig";
import { AdvertiserBillingConfig } from "./advertiserbillingconfig";
import { AdvertiserCreativeConfig } from "./advertisercreativeconfig";
import { AdvertiserDataAccessConfig } from "./advertiserdataaccessconfig";
import { AdvertiserGeneralConfig } from "./advertisergeneralconfig";
import { IntegrationDetails } from "./integrationdetails";
import { AdvertiserTargetingConfig } from "./advertisertargetingconfig";
import { AdvertiserGeneralConfigInput } from "./advertisergeneralconfig";


export enum AdvertiserEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Advertiser
/** 
 * A single advertiser in Display & Video 360 (DV360).
**/
export class Advertiser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adServerConfig" })
  adServerConfig?: AdvertiserAdServerConfig;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=billingConfig" })
  billingConfig?: AdvertiserBillingConfig;

  @SpeakeasyMetadata({ data: "json, name=creativeConfig" })
  creativeConfig?: AdvertiserCreativeConfig;

  @SpeakeasyMetadata({ data: "json, name=dataAccessConfig" })
  dataAccessConfig?: AdvertiserDataAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: AdvertiserEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=generalConfig" })
  generalConfig?: AdvertiserGeneralConfig;

  @SpeakeasyMetadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaEnabled" })
  prismaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=servingConfig" })
  servingConfig?: AdvertiserTargetingConfig;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// AdvertiserInput
/** 
 * A single advertiser in Display & Video 360 (DV360).
**/
export class AdvertiserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adServerConfig" })
  adServerConfig?: AdvertiserAdServerConfig;

  @SpeakeasyMetadata({ data: "json, name=billingConfig" })
  billingConfig?: AdvertiserBillingConfig;

  @SpeakeasyMetadata({ data: "json, name=creativeConfig" })
  creativeConfig?: AdvertiserCreativeConfig;

  @SpeakeasyMetadata({ data: "json, name=dataAccessConfig" })
  dataAccessConfig?: AdvertiserDataAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: AdvertiserEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=generalConfig" })
  generalConfig?: AdvertiserGeneralConfigInput;

  @SpeakeasyMetadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaEnabled" })
  prismaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=servingConfig" })
  servingConfig?: AdvertiserTargetingConfig;
}
