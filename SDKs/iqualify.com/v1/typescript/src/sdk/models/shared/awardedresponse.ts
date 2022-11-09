import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AwardedResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=awarded" })
  awarded?: boolean;

  @Metadata({ data: "json, name=badgeId" })
  badgeId?: string;

  @Metadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;
}
