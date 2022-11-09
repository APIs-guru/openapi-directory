import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrequencyCap } from "./frequencycap";

export enum DeliverySchedulePriorityEnum {
    AdPriority01 = "AD_PRIORITY_01"
,    AdPriority02 = "AD_PRIORITY_02"
,    AdPriority03 = "AD_PRIORITY_03"
,    AdPriority04 = "AD_PRIORITY_04"
,    AdPriority05 = "AD_PRIORITY_05"
,    AdPriority06 = "AD_PRIORITY_06"
,    AdPriority07 = "AD_PRIORITY_07"
,    AdPriority08 = "AD_PRIORITY_08"
,    AdPriority09 = "AD_PRIORITY_09"
,    AdPriority10 = "AD_PRIORITY_10"
,    AdPriority11 = "AD_PRIORITY_11"
,    AdPriority12 = "AD_PRIORITY_12"
,    AdPriority13 = "AD_PRIORITY_13"
,    AdPriority14 = "AD_PRIORITY_14"
,    AdPriority15 = "AD_PRIORITY_15"
,    AdPriority16 = "AD_PRIORITY_16"
}


// DeliverySchedule
/** 
 * Delivery Schedule.
**/
export class DeliverySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @Metadata({ data: "json, name=hardCutoff" })
  hardCutoff?: boolean;

  @Metadata({ data: "json, name=impressionRatio" })
  impressionRatio?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: DeliverySchedulePriorityEnum;
}
