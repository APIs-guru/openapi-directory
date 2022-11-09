import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PodcastLookingForField extends SpeakeasyBase {
  @Metadata({ data: "json, name=cohosts" })
  cohosts?: boolean;

  @Metadata({ data: "json, name=cross_promotion" })
  crossPromotion?: boolean;

  @Metadata({ data: "json, name=guests" })
  guests?: boolean;

  @Metadata({ data: "json, name=sponsors" })
  sponsors?: boolean;
}
