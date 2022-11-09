import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode404PiisEnum } from "./messagecode404piisenum";


export class TppMessage404Piis extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: TppMessageCategoryEnum;

  @Metadata({ data: "json, name=code" })
  code: MessageCode404PiisEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
