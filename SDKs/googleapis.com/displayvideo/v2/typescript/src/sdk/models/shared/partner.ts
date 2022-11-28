import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerAdServerConfig } from "./partneradserverconfig";
import { PartnerDataAccessConfig } from "./partnerdataaccessconfig";
import { ExchangeConfig } from "./exchangeconfig";
import { PartnerGeneralConfig } from "./partnergeneralconfig";


export enum PartnerEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Partner
/** 
 * A single partner in Display & Video 360 (DV360).
**/
export class Partner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adServerConfig" })
  adServerConfig?: PartnerAdServerConfig;

  @SpeakeasyMetadata({ data: "json, name=dataAccessConfig" })
  dataAccessConfig?: PartnerDataAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: PartnerEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exchangeConfig" })
  exchangeConfig?: ExchangeConfig;

  @SpeakeasyMetadata({ data: "json, name=generalConfig" })
  generalConfig?: PartnerGeneralConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
