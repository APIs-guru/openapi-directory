import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RepeatViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=monthDay" })
  monthDay?: string;

  @Metadata({ data: "json, name=monthType" })
  monthType?: string;

  @Metadata({ data: "json, name=weekdays" })
  weekdays?: string;
}
