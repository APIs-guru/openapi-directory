import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimezonesViewModel } from "./timezonesviewmodel";



export class TimezoneViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];

  @SpeakeasyMetadata({ data: "json, name=timezones", elemType: TimezonesViewModel })
  timezones?: TimezonesViewModel[];
}
