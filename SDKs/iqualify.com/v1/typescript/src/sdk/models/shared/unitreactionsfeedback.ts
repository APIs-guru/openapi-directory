import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnitReactionsFeedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=thumbs-down" })
  thumbsDown?: number;

  @Metadata({ data: "json, name=thumbs-up" })
  thumbsUp?: number;
}
