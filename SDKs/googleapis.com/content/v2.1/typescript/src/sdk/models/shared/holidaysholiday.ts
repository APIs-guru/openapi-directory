import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HolidaysHoliday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryGuaranteeDate" })
  deliveryGuaranteeDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryGuaranteeHour" })
  deliveryGuaranteeHour?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
