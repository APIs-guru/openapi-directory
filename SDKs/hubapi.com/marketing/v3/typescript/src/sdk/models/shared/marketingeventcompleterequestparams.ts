import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketingEventCompleteRequestParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDateTime" })
  endDateTime: Date;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime: Date;
}
