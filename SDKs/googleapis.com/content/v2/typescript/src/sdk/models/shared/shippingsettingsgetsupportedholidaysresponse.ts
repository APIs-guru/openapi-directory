import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HolidaysHoliday } from "./holidaysholiday";


export class ShippingsettingsGetSupportedHolidaysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=holidays", elemType: shared.HolidaysHoliday })
  holidays?: HolidaysHoliday[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
