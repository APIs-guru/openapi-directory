import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PodcastLookingForField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cohosts" })
  cohosts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cross_promotion" })
  crossPromotion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guests" })
  guests?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sponsors" })
  sponsors?: boolean;
}
