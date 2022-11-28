import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnitReactionsFeedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thumbs-down" })
  thumbsDown?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbs-up" })
  thumbsUp?: number;
}
