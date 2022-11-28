import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BusinessDayConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessDays" })
  businessDays?: string[];
}
