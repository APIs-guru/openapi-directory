import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HolidaysHoliday } from "./holidaysholiday";



export class ShippingsettingsGetSupportedHolidaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=holidays", elemType: HolidaysHoliday })
  holidays?: HolidaysHoliday[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
