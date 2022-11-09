import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceSettingsUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @Metadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @Metadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;
}
