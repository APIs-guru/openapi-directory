import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountAdsLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=adsId" })
  adsId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
