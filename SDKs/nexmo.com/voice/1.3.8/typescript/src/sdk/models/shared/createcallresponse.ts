import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";



export class CreateCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
