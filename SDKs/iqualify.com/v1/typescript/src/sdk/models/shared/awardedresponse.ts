import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AwardedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awarded" })
  awarded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=badgeId" })
  badgeId?: string;

  @SpeakeasyMetadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;
}
