import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimezonesViewModel } from "./timezonesviewmodel";


export class TimezoneViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions" })
  regions?: string[];

  @Metadata({ data: "json, name=timezones", elemType: shared.TimezonesViewModel })
  timezones?: TimezonesViewModel[];
}
