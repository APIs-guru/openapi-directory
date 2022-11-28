import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsPropertyId" })
  analyticsPropertyId?: string;
}
