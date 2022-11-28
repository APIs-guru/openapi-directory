import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddGoogleAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsAccountId" })
  analyticsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=analyticsPropertyId" })
  analyticsPropertyId?: string;
}
