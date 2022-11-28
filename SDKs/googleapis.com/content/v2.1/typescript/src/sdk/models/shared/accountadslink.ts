import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountAdsLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adsId" })
  adsId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
