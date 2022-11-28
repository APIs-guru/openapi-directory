import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RepeatViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=monthDay" })
  monthDay?: string;

  @SpeakeasyMetadata({ data: "json, name=monthType" })
  monthType?: string;

  @SpeakeasyMetadata({ data: "json, name=weekdays" })
  weekdays?: string;
}
