import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";


export enum LineItemFlightFlightDateTypeEnum {
    LineItemFlightDateTypeUnspecified = "LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED",
    LineItemFlightDateTypeInherited = "LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED",
    LineItemFlightDateTypeCustom = "LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM"
}


// LineItemFlight
/** 
 * Settings that control the active duration of a line item.
**/
export class LineItemFlight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=flightDateType" })
  flightDateType?: LineItemFlightFlightDateTypeEnum;
}
