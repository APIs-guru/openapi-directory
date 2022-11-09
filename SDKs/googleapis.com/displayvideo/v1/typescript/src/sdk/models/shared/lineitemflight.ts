import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";

export enum LineItemFlightFlightDateTypeEnum {
    LineItemFlightDateTypeUnspecified = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED"
,    LineItemFlightDateTypeInherited = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED"
,    LineItemFlightDateTypeCustom = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
,    LineItemFlightDateTypeTrigger = "LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER"
}


// LineItemFlight
/** 
 * Settings that control the active duration of a line item.
**/
export class LineItemFlight extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=flightDateType" })
  flightDateType?: LineItemFlightFlightDateTypeEnum;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
