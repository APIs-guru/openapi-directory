import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerAdServerConfig } from "./partneradserverconfig";
import { PartnerDataAccessConfig } from "./partnerdataaccessconfig";
import { ExchangeConfig } from "./exchangeconfig";
import { PartnerGeneralConfig } from "./partnergeneralconfig";
export declare enum PartnerEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single partner in Display & Video 360 (DV360).
**/
export declare class Partner extends SpeakeasyBase {
    adServerConfig?: PartnerAdServerConfig;
    dataAccessConfig?: PartnerDataAccessConfig;
    displayName?: string;
    entityStatus?: PartnerEntityStatusEnum;
    exchangeConfig?: ExchangeConfig;
    generalConfig?: PartnerGeneralConfig;
    name?: string;
    partnerId?: string;
    updateTime?: string;
}
