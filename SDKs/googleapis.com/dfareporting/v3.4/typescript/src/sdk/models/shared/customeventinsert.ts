import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignManagerIds } from "./campaignmanagerids";
import { Dv3Ids } from "./dv3ids";

export enum CustomEventInsertInsertEventTypeEnum {
    Unknown = "UNKNOWN"
,    Impression = "IMPRESSION"
,    Click = "CLICK"
}


// CustomEventInsert
/** 
 * Custom event to be inserted.
**/
export class CustomEventInsert extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmDimensions" })
  cmDimensions?: CampaignManagerIds;

  @Metadata({ data: "json, name=dv3Dimensions" })
  dv3Dimensions?: Dv3Ids;

  @Metadata({ data: "json, name=insertEventType" })
  insertEventType?: CustomEventInsertInsertEventTypeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=matchId" })
  matchId?: string;

  @Metadata({ data: "json, name=mobileDeviceId" })
  mobileDeviceId?: string;
}
