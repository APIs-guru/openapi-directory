import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405PiisEnum } from "./messagecode405piisenum";


export class TppMessage405Piis extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @Metadata({ data: "json, name=code" })
  code: MessageCode405PiisEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
