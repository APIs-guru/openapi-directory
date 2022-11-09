import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddGoogleAnalyticsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsAccountId" })
  analyticsAccountId?: string;

  @Metadata({ data: "json, name=analyticsPropertyId" })
  analyticsPropertyId?: string;
}
