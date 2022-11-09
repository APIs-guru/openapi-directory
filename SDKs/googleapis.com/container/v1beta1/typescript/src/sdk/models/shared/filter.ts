import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FilterEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED"
,    UpgradeAvailableEvent = "UPGRADE_AVAILABLE_EVENT"
,    UpgradeEvent = "UPGRADE_EVENT"
,    SecurityBulletinEvent = "SECURITY_BULLETIN_EVENT"
}


// Filter
/** 
 * Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventType" })
  eventType?: FilterEventTypeEnum[];
}
