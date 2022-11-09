import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectionEnum } from "./directionenum";


export class CreateCallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
