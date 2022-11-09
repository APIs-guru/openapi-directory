import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HolidaysHoliday extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=deliveryGuaranteeDate" })
  deliveryGuaranteeDate?: string;

  @Metadata({ data: "json, name=deliveryGuaranteeHour" })
  deliveryGuaranteeHour?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
