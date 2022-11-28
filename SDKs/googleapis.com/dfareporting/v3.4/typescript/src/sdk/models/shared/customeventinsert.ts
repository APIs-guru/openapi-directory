import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignManagerIds } from "./campaignmanagerids";
import { Dv3Ids } from "./dv3ids";


export enum CustomEventInsertInsertEventTypeEnum {
    Unknown = "UNKNOWN",
    Impression = "IMPRESSION",
    Click = "CLICK"
}


// CustomEventInsert
/** 
 * Custom event to be inserted.
**/
export class CustomEventInsert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmDimensions" })
  cmDimensions?: CampaignManagerIds;

  @SpeakeasyMetadata({ data: "json, name=dv3Dimensions" })
  dv3Dimensions?: Dv3Ids;

  @SpeakeasyMetadata({ data: "json, name=insertEventType" })
  insertEventType?: CustomEventInsertInsertEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=matchId" })
  matchId?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceId" })
  mobileDeviceId?: string;
}
