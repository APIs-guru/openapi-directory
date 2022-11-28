import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketingEventCompleteRequestParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime: Date;
}
