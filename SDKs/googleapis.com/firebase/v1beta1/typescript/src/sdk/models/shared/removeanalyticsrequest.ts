import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveAnalyticsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsPropertyId" })
  analyticsPropertyId?: string;
}
