import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessDayConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessDays" })
  businessDays?: string[];
}
