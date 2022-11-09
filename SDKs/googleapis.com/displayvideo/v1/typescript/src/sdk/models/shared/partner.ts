import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartnerAdServerConfig } from "./partneradserverconfig";
import { PartnerDataAccessConfig } from "./partnerdataaccessconfig";
import { ExchangeConfig } from "./exchangeconfig";
import { PartnerGeneralConfig } from "./partnergeneralconfig";

export enum PartnerEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}


// Partner
/** 
 * A single partner in Display & Video 360 (DV360).
**/
export class Partner extends SpeakeasyBase {
  @Metadata({ data: "json, name=adServerConfig" })
  adServerConfig?: PartnerAdServerConfig;

  @Metadata({ data: "json, name=dataAccessConfig" })
  dataAccessConfig?: PartnerDataAccessConfig;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: PartnerEntityStatusEnum;

  @Metadata({ data: "json, name=exchangeConfig" })
  exchangeConfig?: ExchangeConfig;

  @Metadata({ data: "json, name=generalConfig" })
  generalConfig?: PartnerGeneralConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
