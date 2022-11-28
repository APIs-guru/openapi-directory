import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignManagerIds } from "./campaignmanagerids";
import { Dv3Ids } from "./dv3ids";
export declare enum CustomEventInsertInsertEventTypeEnum {
    Unknown = "UNKNOWN",
    Impression = "IMPRESSION",
    Click = "CLICK"
}
/**
 * Custom event to be inserted.
**/
export declare class CustomEventInsert extends SpeakeasyBase {
    cmDimensions?: CampaignManagerIds;
    dv3Dimensions?: Dv3Ids;
    insertEventType?: CustomEventInsertInsertEventTypeEnum;
    kind?: string;
    matchId?: string;
    mobileDeviceId?: string;
}
