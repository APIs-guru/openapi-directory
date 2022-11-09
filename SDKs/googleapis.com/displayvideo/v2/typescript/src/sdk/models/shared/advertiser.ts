import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvertiserAdServerConfig } from "./advertiseradserverconfig";
import { AdvertiserCreativeConfig } from "./advertisercreativeconfig";
import { AdvertiserDataAccessConfig } from "./advertiserdataaccessconfig";
import { AdvertiserGeneralConfig } from "./advertisergeneralconfig";
import { IntegrationDetails } from "./integrationdetails";
import { AdvertiserTargetingConfig } from "./advertisertargetingconfig";

export enum AdvertiserEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Advertiser
/** 
 * A single advertiser in Display & Video 360 (DV360).
**/
export class Advertiser extends SpeakeasyBase {
  @Metadata({ data: "json, name=adServerConfig" })
  adServerConfig?: AdvertiserAdServerConfig;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=creativeConfig" })
  creativeConfig?: AdvertiserCreativeConfig;

  @Metadata({ data: "json, name=dataAccessConfig" })
  dataAccessConfig?: AdvertiserDataAccessConfig;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: AdvertiserEntityStatusEnum;

  @Metadata({ data: "json, name=generalConfig" })
  generalConfig?: AdvertiserGeneralConfig;

  @Metadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @Metadata({ data: "json, name=prismaEnabled" })
  prismaEnabled?: boolean;

  @Metadata({ data: "json, name=servingConfig" })
  servingConfig?: AdvertiserTargetingConfig;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
